import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
    name : 'services' ,

    initialState : {
        services : [] ,
    } ,

    reducers : {
        getAllServices : (state , action) => {
            state.services = action.payload.map(service => {
                return {
                    _id : service._id ,
                    service_name : service.service_name ,
                    service_image : service.service_image ,
                    category_id : service.category_id ,
                    subcategory_id : service.subcategory_id ,
                    price : service.price ,
                    location : service.location ,
                    company_id : service.company_id ,
                    short_description : service.short_description ,
                    option : service.option ,
                }
            }) ;
        } ,
    }
}) ;

export const { getAllServices } = serviceSlice.actions ;
export default serviceSlice.reducer ;
