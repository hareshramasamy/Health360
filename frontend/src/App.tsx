import React, { ReactNode } from 'react';
import './App.css';
import Login from './components/Signin/login'
import Landing from './components/LandingPage/Landing'
import Signup from './components/Signup/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddFood from './components/DailyFoodLog/addfood';
import SearchFood from './components/DailyFoodLog/searchFood';
import BlogPage from "./components/BlogPage/BlogPage"
import DietPlanDashboard from './components/DietPlan/DietPlanDashboard';
import WorkoutPlanDashboard from './components/WorkoutPlan/WorkoutPlanDashboard';
import { useSelector } from 'react-redux';
import { RootState } from './store'; // Assuming RootState is your Redux store state type
import VegetarianDietApp from './components/DietPlan/Vegetarian';
import NonVegDietApp from './components/DietPlan/Non-vegetarian';
import VeganDietApp from './components/DietPlan/Vegan';
import WeightlossApp from './components/WorkoutPlan/WeightLoss';
import WeightgainApp from './components/WorkoutPlan/WeightGain';
import MaintainWeightApp from './components/WorkoutPlan/MaintainWeight';

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
        <Route path="/dietplan/vegetarian" element={<PrivateRoute element = {<VegetarianDietApp />} />} />
        <Route path="/dietplan/nonvegetarian" element={<PrivateRoute element = {<NonVegDietApp />} />} />
        <Route path="/dietplan/vegan" element={<PrivateRoute element = {<VeganDietApp />} />} />
        <Route path="/workoutplan/weightloss" element={<PrivateRoute element = {<WeightlossApp />} />} />
        <Route path="/workoutplan/weightgain" element={<PrivateRoute element = {<WeightgainApp />} />} />
        <Route path="/workoutplan/maintainweight" element={<PrivateRoute element = {<MaintainWeightApp />} />} />
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
