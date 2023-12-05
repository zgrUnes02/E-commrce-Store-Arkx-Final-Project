import React, { useState } from "react";
import "./CustomerLogin.css";
import { Link, useNavigate } from 'react-router-dom';
import { loginCustomer } from '../../../redux/customerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerLogin = () => {

    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;

    const [email , setEmail] = useState() ;
    const [password , setPassword] = useState() ;
    const errors = useSelector(state => state.customer.error) ;

    const login = (e) => {
        e.preventDefault() ;
        dispatch(loginCustomer({email , password})).then(response => {
            if ( response.payload.token ) {
                localStorage.setItem('token' , response.payload.token) ;
                localStorage.setItem('first_name' , response.payload.customer.first_name) ;
                localStorage.setItem('last_name' , response.payload.customer.last_name) ;
                localStorage.setItem('email' , response.payload.customer.email) ;
                localStorage.setItem('id' , response.payload.customer._id) ;
                navigate('/') ;
            }
        }) ;

        if ( errors ) {
          toast(errors.data.message) ;
        }
        
    }

  return (
    <div>
      <ToastContainer/>
      <div className="section">
        <div className="image"></div>
        <article className="login">
          <div className="all">
            <h1>
              Welcome back, <span>Champion!</span>
            </h1>
            <h3>Enter your credentials</h3>

            <form action="" className="form" onSubmit={login}>
              <input
                type="email"
                className="input"
                placeholder="Enter your email"
                required
                onChange={(e) => {setEmail(e.target.value)}}
              />
              <input
                type="password"
                className="password"
                placeholder="Enter your password"
                required
                onChange={(e) => {setPassword(e.target.value)}}
              />
              <button type="submit">LOGIN</button>
              <div className="d-flex justify-content-between gap-5 input-check">
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <a href="#">Forgot your password ?</a>
              </div>
              <div class="text-center">
                <p>
                  Not a member? <Link to={'/register/customer'}><a>Register</a></Link>
                </p>
              </div>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CustomerLogin;
