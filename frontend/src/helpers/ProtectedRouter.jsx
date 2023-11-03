import React from 'react' ;
import { Navigate, Outlet } from 'react-router-dom';

const adminAuth = () => {
    const token = localStorage.getItem('token') ;
    return token ;
}

function ProtectedRouter() {
    const justContinue = adminAuth() ;
    return justContinue ? <Outlet /> : <Navigate to={'/users/login'} />
}

export default ProtectedRouter ;
