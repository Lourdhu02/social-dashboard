import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Login from './auth/Login';
import Signup from './auth/Signup';
export default function App() {
  return (
    
     <BrowserRouter>
     <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

    
  </Routes>
  </BrowserRouter>
  )
}
