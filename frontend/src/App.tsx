import React, { ReactNode } from 'react';
import './App.css';
import Login from './components/Signin/login'
import Landing from './components/LandingPage/Landing'
import Signup from './components/Signup/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DietPlanDashboard from './components/DietPlan/DietPlanDashboard';
import { useSelector } from 'react-redux';
import { RootState } from './store'; // Assuming RootState is your Redux store state type

type PrivateRouteProps = {
  element: ReactNode;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<PrivateRoute element = {<Dashboard />} />} />
        <Route path="/dietplan" element={<PrivateRoute element = {<DietPlanDashboard />} />} />
      </Routes>
    </BrowserRouter>
  );
}

function PrivateRoute({ element }: PrivateRouteProps) {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return isLoggedIn ? (element as JSX.Element) : <Login />;
}

export default App;
