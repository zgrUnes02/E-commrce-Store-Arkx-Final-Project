import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { getAllCustomers } from '../../redux/customerSlice';

function Customers() {

    const dispatch = useDispatch() ;
    const customers = useSelector(state => state.customer.customers) ;

    useEffect(() => {
        const getData = async () => {
            const response = await AuthAxios.get('http://localhost:4000/v1/customers') ;
            dispatch(getAllCustomers(response.data.docs)) ;         
        }
        getData() ;
    } , [])

    const deleteCustomer = ( id ) => {
        AuthAxios.delete(`http://localhost:4000/v1/customers/delete/${id}`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error)) ;
    } 

    return (
        <React.Fragment>

            <Header/>
            <LeftSideBar/>

            <main id="main" className="main">

            <div className="pagetitle">
                <h1> The Customers </h1>
            </div>

            <section className="section">
                <div className="row">
                    <div className="col-lg-12">

                    <div className="card">
                        <div className="card-body">

                        <table className="table text-center table-responsive-lg">
                            <thead>
                                <tr>
                                    <th scope="col"> # </th>
                                    <th scope="col"> First Name </th>
                                    <th scope="col"> Last Name </th>
                                    <th scope="col"> Email </th>
                                    <th scope="col"> Active </th>
                                    <th scope="col"> Account Validation </th>
                                    <th scope="col" width="14%"> Actions </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    customers?.map((customer , index) => 
                                        <tr key={index}>
                                            <td> { index + 1 } </td>
                                            <td> { customer.first_name } </td>
                                            <td> { customer.last_name } </td>
                                            <td> { customer.email } </td>
                                            { customer.active ? <td>active</td> : <td>inactive</td> }
                                            { customer.valid_account ? <td> valid account </td> : <td> invalid account </td> }
                                            <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                <button className='btn btn-outline-success'> <i className="fa-solid fa-eye"></i> </button>
                                                <button className='btn btn-outline-danger'> <i className="fa-solid fa-trash"></i> </button>
                                                <button className='btn btn-outline-warning'> <i className="fa-solid fa-lock"></i> </button>
                                            </td>
                                        </tr>
                                    ) 
                                }
                            </tbody>

                        </table>
                        </div>
                    </div>


                    </div>
                </div>
            </section>

            </main>
            
        </React.Fragment>    
    )
}

export default Customers ;
