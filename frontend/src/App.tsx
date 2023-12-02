import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/login"
import Landing from "./components/LandingPage/Landing"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/login" element={<Login/>}></Route>
        <Route path= "/" element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
