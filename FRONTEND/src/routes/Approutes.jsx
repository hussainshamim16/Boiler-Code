import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Users from '../application api/Users';
import Login from '../pages/login';
import Signup from '../pages/Signup';
import Inter from '../pages/inter';
import Admin from '../pages/Admin';
import Beneficiary from '../pages/Beneficiary';
import DepartmentForm from '../pages/Department';
import AdminDashBoard from '../pages/AdminDashBoard';

const Approutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/users' element={<Users />} />
                <Route path='/login' element={<Login />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/' element={<Inter />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/beneficiary' element={<Beneficiary />} />
                <Route path='/department' element={<DepartmentForm />} />
                <Route path='/dashboard' element={<AdminDashBoard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Approutes