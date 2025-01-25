import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Users from '../application api/Users';

const Approutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/users' element={<Users />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Approutes