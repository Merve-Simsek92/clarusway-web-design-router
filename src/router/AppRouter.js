import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from "../pages/About"
import Home from "../pages/Home"
import Services from "../pages/Services"
import Html from "../pages/Html"
import Css from "../pages/Css"
import Logo from "../pages/Logo"
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
            <Route path="/html" element={<Html/>}/>
            <Route path="/css" element={<Css/>}/>
            <Route path="/logo" element={<Logo/>}/>
        </Routes>
        
        
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter