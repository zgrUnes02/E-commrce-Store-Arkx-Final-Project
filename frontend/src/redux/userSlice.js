import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" ;
import AuthAxios from "../helpers/request";

export const getAllUsers = createAsyncThunk('users/getAllUsers' , async () => {
    return AuthAxios.get('http://localhost:4000/v1/users')
    .then(response => response.data.docs)
    .catch(error => console.log(error.response))
})

export const deleteUser = createAsyncThunk('users/deleteUser' , async ( id ) => {
    return AuthAxios.delete(`http://localhost:4000/v1/users/${id}`)
    .then(response => {
        const returnData = {id : id , message : response.data.message}
        return returnData
    })
    .catch(error => console.log(error.response))
})

const userSlice = createSlice({
    name : 'users' ,

    initialState : {
        users : [] ,
        status : '' ,
        error : '' ,
    } ,

    reducers : {
        refreshUser : (state , action) => {
            const index = state.users.findIndex(user => user._id === action.payload._id) ;
            state.users[index] = action.payload ;
        }
    } ,

    extraReducers : ( builder ) => {
        builder

        //! Get all users
        .addCase(getAllUsers.fulfilled , (state , action) => {
            state.status = 'fulfilled'
            state.users = action.payload 
        })
        .addCase(getAllUsers.rejected , (state , action) => {
            state.status = 'rejected'
            state.error = action.payload 
        })
        .addCase(getAllUsers.pending , (state , action) => {
            state.status = 'pending'
        })

        //! Delete user
        .addCase(deleteUser.fulfilled , (state , action) => {
            state.status = 'fulfilled'
            state.users = state.users.filter(user => user._id !== action.payload.id)
        })
        .addCase(deleteUser.rejected , (state , action) => {
            state.status = 'rejected'
            state.error = action.payload 
        })
        .addCase(deleteUser.pending , (state , action) => {
            state.status = 'pending'
        })
    }
}) ;

export const { refreshUser } = userSlice.actions ;
export default userSlice.reducer ;
