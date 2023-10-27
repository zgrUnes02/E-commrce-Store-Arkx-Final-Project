import { createSlice } from "@reduxjs/toolkit" ;

const categorySlice = createSlice({
    name : 'categories' ,
    initialState : {
        categories : []
    } ,
    reducers : {

    } ,
}) ;

export const {} = categorySlice.actions ;
export default categorySlice.reducer ;
