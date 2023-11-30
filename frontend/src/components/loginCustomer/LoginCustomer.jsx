import React, { useState } from 'react' ;
import { useDispatch } from 'react-redux';
import { getCustomerProfile, loginCustomer } from '../../redux/customerSlice';
import { useNavigate } from 'react-router-dom';


function LoginCustomer() {

    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;

    const [email , setEmail] = useState() ;
    const [password , setPassword] = useState() ;

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
    }

    return (
        <React.Fragment>
            <div style={{width:"500px" , margin:"200px auto" , border:"1px solid white ", padding:"40px" , borderRadius:"20px" , boxShadow: "0 0 20px black" ,backgroundColor:"white"}}>
                <form onSubmit={login}>
                    <label htmlFor="inputEmail" className="mb-3"> Email </label>
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" name="email" id="inputEmail" className="form-control mb-4" required/>

                    <label htmlFor="inputPassword" className="mb-3"> Password </label>
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" name="password" id="inputPassword" className="form-control mb-4" required/>

                    <div style={{display:'flex' , justifyContent:"space-between" , alignItems:"center"}}>
                        <button className="btn btn-primary" type="submit">
                            Sign in
                        </button>
                        <div>
                            <a href="/register"> don't have account? </a>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default LoginCustomer ;
