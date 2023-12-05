import React, { ReactNode } from 'react';
import './App.css';
import Login from './components/Signin/login'
import Landing from './components/LandingPage/Landing'
import Signup from './components/Signup/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import BlogPage from "./components/BlogPage/BlogPage"
import DietPlanDashboard from './components/DietPlan/DietPlanDashboard';
import WorkoutPlanDashboard from './components/WorkoutPlan/WorkoutPlanDashboard';
import AddFood from './components/DailyFoodLog/addfood';
import { useSelector } from 'react-redux';
import { RootState } from './store'; // Assuming RootState is your Redux store state type
import SearchFood from './components/DailyFoodLog/searchFood';

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
        <Route path="/blogPage" element={<PrivateRoute element = {<BlogPage />} />} />
        <Route path="/workoutplan" element={<PrivateRoute element = {<WorkoutPlanDashboard />} />} />
        <Route path="/addfood" element={<PrivateRoute element = {<AddFood />} />} />
        <Route path="/searchfood/:mealType/:formattedDate" element={<PrivateRoute element = {<SearchFood />} />} />
      </Routes>
    </BrowserRouter>
  );
}

function PrivateRoute({ element }: PrivateRouteProps) {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return isLoggedIn ? (element as JSX.Element) : <Login />;
}

export default App;
