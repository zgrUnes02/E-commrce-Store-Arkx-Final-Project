import React from 'react' ;
import { Navigate, Outlet } from 'react-router-dom';

const isLoggedIn = () => {
    const token = localStorage.getItem('token') ;
    return token ;
}

function UserAlreadyAuthenticated() {
    const isUserLoggedIn = isLoggedIn() ;
    return isUserLoggedIn ? <Navigate to={'/dashboard'} /> : <Outlet/>
}

export default UserAlreadyAuthenticated ;
