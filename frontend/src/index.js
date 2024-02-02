import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes, Route,Outlet } from "react-router-dom";
import Navbar from './html/Home/Navbar';
import Login from './html/Home/Login.jsx';
import About from './html/Home/About.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes> 
    <Route path='/' element={<><Navbar/></>}/>
     <Route path ="/login" element={<Login/>}></Route> 
     <Route path='/about' element={<About/>}></Route>
     <Route path='/*' element={<p>No route is available</p>}/>
    </Routes>
    <Outlet/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

