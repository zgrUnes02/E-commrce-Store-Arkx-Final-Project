import React from 'react' ;
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRouter() {
    const token = localStorage.getItem('token') ;
    return token ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRouter ;
