import React, { useState } from "react";
import style from  "./CustomerLogin.module.css";
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
                window.location.reload();
            }
        }) ;

        if ( errors ) {
          toast(errors.data.message) ;
        }
        
    }

  return (
    <div>
      <ToastContainer/>
      <div className={style.section}>
        <div className={style.image}></div>
        <article className={style.login}>
          <div className="all">
            <h1 className={style.h1}>
              Welcome back, <span className={style.span}>Champion!</span>
            </h1>
            <h3 className={style.h3}>Enter your credentials</h3>

            <form action="" className={style.form} onSubmit={login}>
              <input
                type="email"
                className={style.input}
                placeholder="Enter your email"
                required
                onChange={(e) => {setEmail(e.target.value)}}
              />
              <input
                type="password"
                className={style.input}
                placeholder="Enter your password"
                required
                onChange={(e) => {setPassword(e.target.value)}}
              />
              <button type="submit" className={style.button}>LOGIN</button>
              <div className={style.input_check}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className={style.form_check_label} for="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <a className={style.a} href="#">Forgot your password ?</a>
              </div>
              <div className="text-center">
                <p>
                  Not a member? <Link to={'/register/customer'}><a className={style.a}>Register</a></Link>
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
