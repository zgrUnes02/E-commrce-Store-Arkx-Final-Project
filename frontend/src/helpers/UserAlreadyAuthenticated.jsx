import React, { useEffect } from 'react' ;
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { userProfile } from '../redux/userSlice';
import UserLogin from '../pages/user/UserLogin' ;


function UserAlreadyAuthenticated() {
    const dispatch = useDispatch()
    dispatch(userProfile()); 
    const user = useSelector(state => state.user.user) ;
    return user ? <Navigate to='/dashboard' /> : <UserLogin />
}

export default UserAlreadyAuthenticated ;
