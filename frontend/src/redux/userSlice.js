import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'users' ,

    initialState : {
        users : [] ,
    } ,

    reducers : {

        //! Get all users 
        getAllUsers : (state , action) => {
            state.users = action.payload.map(user => {
                return { 
                    _id : user._id , 
                    first_name : user.first_name , 
                    last_name : user.last_name , 
                    user_name : user.user_name , 
                    role : user.role , 
                    email : user.email , 
                    active : user.active 
                }
            })
        } ,

        deleteUser : (state , action) => {
            state.users = state.users.filter(user => user._id !== action.payload.id) ;
        } ,

        refreshUser : (state , action) => {
            state.users = state.users.filter(user => user._id !== 'test') ;
        }
    }
}) ;

export const { getAllUsers , deleteUser , refreshUser } = userSlice.actions ;
export default userSlice.reducer ;
