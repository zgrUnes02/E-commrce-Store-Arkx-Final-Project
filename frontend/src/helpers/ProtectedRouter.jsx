import React from 'react' ;
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { userProfile } from '../redux/userSlice';

function ProtectedRouter() {
    const user = useSelector(state => state.user.user) ;    
    return user ? <Outlet /> : <Navigate to='/users/login' />
}

export default ProtectedRouter ;
