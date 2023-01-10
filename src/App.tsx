import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import EventExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types/types';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TodosPage from './components/TodosPage';
import UsersPage from './components/UsersPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App =()=> {

  

  return (
    <BrowserRouter>
    <div>
      <Link to={'/users'}>Users</Link>
      <Link to={'/todos'}>Todos</Link>
    </div>
      <Routes>
        <Route path='/users' element={<UsersPage />}/>
        <Route path='/todos' element={<TodosPage />}/>
        <Route path='/user/:id' element={<UserItemPage />}/> 
        <Route path='/todos/:id' element={<TodoItemPage />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
