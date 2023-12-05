import React, { useState } from "react";
import style from "./CustomerRegister.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerCustomer } from "../../../redux/customerSlice";
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerRegister = () => {

  const dispatch = useDispatch() ;
  const navigate = useNavigate() ;
  const errors = useSelector(state => state.customer.error) ;
 
  const [first_name , setFirstName] = useState() ;
  const [last_name , setLastName] = useState() ;
  const [email , setEmail] = useState() ;
  const [password , setPassword] = useState() ;
  const [confirmPassword , setConfirmPassword] = useState() ;

  const register = (e) => {

    const data = {first_name, last_name, email, password} ;

    let goContinue = false ;
    e.preventDefault() ;

    if ( confirmPassword !== password ) {
        toast('The confirm password is incorrect !');
    } else {
      goContinue = true ;
    }

    if ( goContinue === true ) {
      dispatch(registerCustomer(data)).then(response => {
        if ( response.payload.message ) {
          navigate('/login/customer') ;
        }
      }) ;
    }

    if ( errors ) {
      toast(errors.data.message);
    }
  }

  return (
    <div>
      <ToastContainer/>
      <div className={style.section}>
        <div className={style.image}></div>
        <article className={style.login}>
          <div className={style.all}>
            <h1 className={style.h1}>
              Welcome, <span className={style.span}>Champion!</span>
            </h1>
            <h3 className={style.h3}>Enter your informations </h3>

            <form action="" className={style.form} onSubmit={register}>
              <input
                type="text"
                className={style.input}
                placeholder="First name"
                required
                onChange={(e) => {setFirstName(e.target.value)}}
              />
              <input
                type="text"
                className={style.input}
                placeholder="Last name"
                required
                onChange={(e) => {setLastName(e.target.value)}}
              />
              <input
                type="email"
                className="input"
                placeholder="Enter your email"
                required
                onChange={(e) => {setEmail(e.target.value)}}
              />

              <input
                type='password'
                className="password"
                placeholder="Enter your password"
                required
                onChange={(e) => {setPassword(e.target.value)}}
              />
              <input
                type='password'
                className="password"
                placeholder="Confirm your password"
                required
                onChange={(e) => {setConfirmPassword(e.target.value)}}
              />
              <button type="submit">Register</button>
              <div className={style.input_check}>
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className={style.form_check_label} for="flexCheckDefault">
                    Receive emails for new arrivals
                  </label>
                </div>
                <p>
                  Already have an account ?{" "}
                  <span>
                    <Link to={'/login/customer'}><a className={style.a}>Sign in</a></Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CustomerRegister;
