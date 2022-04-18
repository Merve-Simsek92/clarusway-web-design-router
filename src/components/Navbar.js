import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div>


<div><h2 className='title'>
    <span>Clarusway</span>Web Design</h2></div>
    <div><NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/services">Services</NavLink>
    </div>
     </div>
  )
}

export default Navbar