import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo/logo4.png'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user,loginWithRedirect,isAuthenticated, logout } = useAuth0();
  

  const[nav, setNav]=useState(false);

  const openNav=()=>{
    setNav(!nav);
  };
  
  return (
    <>
    <nav className='nav'>

      {/* Mobile  */}
      <div className={`mobile-navbar ${ nav ?"open-nav" : ""}`}>
        <div onClick={openNav} className='mobile-navbar_close'>
        <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
      </div>


      {/* Desktop */}
      <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            {/* <li>
              {" "}
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li> */}
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
             <Link className="navbar__buttons__sign-in" to="/contact">
              {
              isAuthenticated && <p>{user.name}</p>
            }
            </Link>
            {/* <Link className="navbar__buttons__register" to="/register">
              Register
            </Link> */} 
            {/* <li className='navbar__buttons__sign-in'>
            {
              !isAuthenticated && <p>{user.name}</p>
            }
            </li> */}
            {
              isAuthenticated ? <button className='navbar__buttons__register' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
              </button> : <button className='navbar__buttons__register' onClick={() => loginWithRedirect()}>Log In</button>
            }
            {/* <button className='navbar__buttons__register' onClick={() => loginWithRedirect()}>Log In</button>
            <button className='navbar__buttons__register' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
            </button> */}
            
          </div>
          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
