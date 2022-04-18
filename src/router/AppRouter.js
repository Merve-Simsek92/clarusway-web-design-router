import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from "../pages/About"
import Home from "../pages/Home"
import Services from "../pages/Services"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <div className='nav-top'>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
           
        </Routes>
        
        
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter