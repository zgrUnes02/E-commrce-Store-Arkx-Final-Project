import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import {IoHeartOutline} from  "react-icons/io5";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";

function Navbar() {

    const logout = () => {
        localStorage.clear();
        window.location.reload() ;
    }

    const token = localStorage.getItem('token') ;

  return (

         <nav className="navbar navbar-expand-lg " >
        <div className="container">
            <Link to={'/'}><a className="navbar-brand me-auto">AthlArk</a></Link>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">AthlArk</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link mx-lg-2 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </a>
                            <ul className="dropdown-menu">
                                <Link style={{ textDecoration:'none' }} to={'/store/products'}><li><a className="dropdown-item" href="#"> Products </a></li></Link>
                                <li><a className="dropdown-item" href="#">Tools</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Service
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Sport Field</a></li>
                                <li><a className="dropdown-item" href="#">Swimming Pool</a></li>
                                <li><a className="dropdown-item" href="#">Gym</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
            
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <form className="form-inline justify-content-center flex-grow-1 pe-3">
                            <div className="form-group" >
                                <input type="text" className="form-control" placeholder="Search . . ." />
                            </div>
                        </form>
                    </div>
               
                </div>
            </div>
            </div>

            <div style={{ display:'flex' , justifyContent:'space-between' , alignItems:'center' }} >

                {
                    token && <Link to={'/profile/customer'}><button className="btn btn-ghost btn-circle mb-1">
                        <FaRegUser size={20} className='icon' style={{color: 'black'}}  /> 
                    </button></Link>
                }
                
                <div>
                    <button className="btn btn-ghost btn-circle"><IoHeartOutline size={25} className='icon' style={{color: 'black'}} /></button>
                </div>

                <div>
                    <Link to={'/cart'}><button className="btn btn-ghost btn-circle"><AiOutlineShoppingCart size={25} className='icon' style={{color: 'black'}} /></button></Link>
                </div>

                {
                    token ? 
                        <button onClick={logout} className="login-button" style={{ marginLeft:'12px' }}> Logout </button> 
                    : <Link to={'/login/customer'}><button className="login-button" style={{ marginLeft:'12px' }}>Login</button></Link>  
                }

                <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>             

            </div>
        </div>
    </nav>

  
  )
}

export default Navbar