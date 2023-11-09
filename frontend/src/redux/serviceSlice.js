import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" ;
import AuthAxios from '../helpers/request' ;

export const getAllServices = createAsyncThunk('services/getAllServices' , async () => {
    return AuthAxios.get('http://localhost:4000/v1/services')
    .then(response => response.data.docs)
    .catch(error => console.log(error)) ;
})

export const deleteService = createAsyncThunk('services/deleteService' , async ( id ) => {
    return AuthAxios.delete(`http://localhost:4000/v1/services/${id}`)
    .then(response => {
        const returnData = { id : id , message : response.data.message } ;
        return returnData ;
    }).catch(error => console.log(error)) ;
})

const serviceSlice = createSlice({
    name : 'services' ,

    initialState : {
        services : [] ,
    } ,

    reducers : {} ,

    extraReducers : ( builder ) => {
        builder

        //! Get all services
        .addCase(getAllServices.fulfilled , (state , action) => {
            state.services = action.payload ;
            state.status = 'fulfilled' ;
        })
        .addCase(getAllServices.rejected , (state , action) => {
            state.error = action.payload ;
            state.status = 'rejected' ;
        })
        .addCase(getAllServices.pending , (state , action) => {
            state.status = 'pending' ;
        })

        //! Delete service
        .addCase(deleteService.fulfilled , (state , action) => {
            state.services = state.services.filter(service => service._id !== action.payload.id);
            state.status = 'fulfilled' ;
        })
        .addCase(deleteService.rejected , (state , action) => {
            state.error = action.payload ;
            state.status = 'rejected' ;
        })
        .addCase(deleteService.pending , (state , action) => {
            state.status = 'pending' ;
        })
    }
}) ;

export default serviceSlice.reducer ;
