import React from 'react'
import "./navbar.css"

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <nav className="navbar">
    <div className="navbar__logo">
    <h2 style={{color:"grey"}}>Test<span style={{color:"black"}}>ME</span></h2>
  </div>
  <ul className="navbar__links">
      <li>
      <button className="right">Sign Up</button></li>
      <li><button className="left">Sign In</button></li>
      </ul>
      <div className="humburger__menu">
      <div></div>
      <div></div>
      <div></div>

      </div>

    </nav>
   )

 }

export default Navbar