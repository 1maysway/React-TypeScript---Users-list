import axios from 'axios';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { ITodo, IUser } from '../types/types';
import List from './List';
import TodoItem from './TodoItem';
import { useParams, useNavigate } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';

type UserItemPageParams={
    id:string;
}

const UserItemPage: FC =()=> {

    const [user,setUser]=useState<IUser|null>(null);
    const params=useParams<UserItemPageParams>();
    const navigate=useNavigate();
  
    useEffect(()=>{
      fetchUser()
    },[])
  
    async function fetchUser() {
      try{
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/'+params.id)
        setUser(response.data);
      }catch(e){
        alert(e)
      }
    }

  return (
    <div>
        <button onClick={()=>navigate('/users')}>Back</button>
        <h1>Page of user {user?.name}</h1>
        <div>
            {user?.email}
        </div>
        <div>
            {user?.address.city} {user?.address.street} {user?.address.zipcode}
        </div>
    </div>
  );
}

export default UserItemPage;
