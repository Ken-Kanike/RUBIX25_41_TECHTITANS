import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import SignInPage from './components/Signin'; 
import DashboardUSER from "./components/DashboardUSER";
import DashboardAdmin from "./components/DashboardAdmin";
import UserRegister from "./components/Signin/UserRegister";
import './App.css';
import AdminRegister from './components/Signin/AdminRegister';
import Footer from './components/Footer';
import Hackathon from './components/Hackathon';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/signin" element={<SignInPage />} /> 
        <Route path="/user-dashboard" element={<DashboardUSER />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/admin-dashboard" element={<DashboardAdmin />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
