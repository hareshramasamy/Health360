import React from 'react';
import './App.css';
import Login from "./components/Signin/login"
import Landing from "./components/LandingPage/Landing"
import Signup from "./components/Signup/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Landing/>}></Route>
        <Route path= "/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;