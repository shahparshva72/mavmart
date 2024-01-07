import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';
import Contactus from './pages/Contactus';
import StudentProfile from './pages/StudentProfile';
import StudentDashboard from './pages/StudentDashboard';
import AdminProfile from './pages/AdminProfile';
import BusinessDashboard from './pages/BusinessDashboard';
import AdminDashboard from './pages/AdminDashboard';
import BusinessProfile from './pages/BusinessProfile';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import SuperAdminProfile from './pages/SuperAdminProfile';
import LoginPage from "./pages/loginPage";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Cart from './pages/Cart';
import ChangePassword from './pages/ChangePassword';
import { UserContext } from './AppContext/UserContext';
import React, { useState, useMemo, useContext } from 'react'

function App() {
  const [value, setValue] = useState(null)

  const providerValue = useMemo(() => ({ 
    value, setValue 
  }), [value, setValue])
  return (
    <>
  <UserContext.Provider value={providerValue}>

    <Navbar/>
    <div className='container'>
      <Routes>
        <Route path="/" element={(<Home/>)} />
        <Route path="/login" element={(<LoginPage/>)} />
        <Route path="/home" element={(<Home/>)} />
        <Route path="/aboutus" element={(<Aboutus/>)} />
        <Route path="/services" element={(<Services/>)} />
        <Route path="/contactus" element={(<Contactus/>)} />
        <Route path="/student/profile" element={(<StudentProfile/>)} />
        <Route path="/student/dashboard" element={(<StudentDashboard/>)} />
        <Route path="/admin/profile" element={(<AdminProfile/>)} />
        <Route path="/admin/cart" element={(<Cart/>)} />
        <Route path="/admin/dashboard" element={(<AdminDashboard/>)} />
        <Route path="/business/profile" element={(<BusinessProfile/>)} />
        <Route path="/business/dashboard" element={(<BusinessDashboard/>)} />
        <Route path="/superadmin/profile" element={(<SuperAdminProfile/>)} />
        <Route path="/superadmin/dashboard" element={(<SuperAdminDashboard/>)} />
        <Route path="/register" element={(<Register />)} />
        <Route path="/forgotpassword" element={(<ForgotPassword />)} />
        <Route path="/changepassword" element={(<ChangePassword />)} />

      

      </Routes>
      
    </div>
    <Footer />
    </UserContext.Provider>
    </>
  )
}

export default App;
