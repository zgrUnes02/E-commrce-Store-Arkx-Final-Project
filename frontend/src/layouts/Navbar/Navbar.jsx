import React, { useState } from "react";
import { IoPersonOutline, IoHeartOutline, IoBagHandleOutline } from "react-icons/io5";
import Head from "./Head";
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom' ;

function Navbar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate() ;
  const logout = () => {
      localStorage.clear();
      navigate('/');
      window.location.reload()
  }
  const [active, setActive] = useState("navmenu");
  const [icon, setIcon] = useState("navtoggler");
  const navToggle = () => {
    if (active === "navmenu") {
      setActive("navmenu navactive");
    } else setActive("navmenu");

    if (icon === "navtoggler") {
      setIcon("navtoggler toggle");
    } else setIcon("navtoggler");
  };
  return (
    <div>
    <Head/>
    <nav className="nav">

      <h2 className="navbrand">
        ATHLARK
      </h2>
      <ul className={active}>
        <Link style={{ textDecoration:'none' , color :'black' }} to={'/'}><li className="navitem">
          <span className="navlink">
            Home
          </span>
        </li></Link>
        <Link style={{ textDecoration:'none' , color :'black' }} to={'/store/products'}><li className="navitem">
          <span className="navlink">
            Shop
          </span>
        </li></Link>
        <Link style={{ textDecoration:'none' , color :'black' }} to={'/store/services'}><li className="navitem">
          <span className="navlink">
            Service
          </span>
        </li></Link>
        <li className="navitem">
          <span className="navlink">
            Join Us
          </span>
        </li>
      </ul>
      <div className="navicon">
      <Link style={{ textDecoration:'none' , color : 'black' }} to={'/wish/list'}><button className="iconlink"><IoHeartOutline  size={24}/></button></Link>
      <Link style={{ textDecoration:'none' , color : 'black' }} to={'/cart'}><button className="iconlink"><IoBagHandleOutline size={24}/></button></Link>
        <div class="dropdown">
         <button className="iconlink"><IoPersonOutline  size={24}/></button>
         <div class="dropdown-content">
        
         {token ? (
            <div>
                <Link style={{ textDecoration:'none' , color : 'black' }} to={'/profile/customer'}><button className="navlink">Profil</button></Link>
                <hr/>
                <button onClick={logout} className="navlink">Log Out</button>
            </div>
              ) : (
                <React.Fragment>
                  <Link style={{ textDecoration:'none' , color : 'black' }} to={'/login/customer'}> <button className="navlink">Log In</button> </Link>
                  <hr/>
                  <Link style={{ textDecoration:'none' , color : 'black' }} to={'/register/customer'}> <button className="navlink">Register</button> </Link>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar