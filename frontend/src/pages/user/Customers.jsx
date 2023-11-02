import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { deleteCustomer, getAllCustomers } from '../../redux/customerSlice';
import { Link } from 'react-router-dom';

function Customers() {

    const dispatch = useDispatch() ;
    const customers = useSelector(state => state.customer.customers) ;

    //! UseEffect
    useEffect(() => {
        const getData = async () => {
            const response = await AuthAxios.get('http://localhost:4000/v1/customers') ;
            dispatch(getAllCustomers(response.data.docs)) ;         
        }
        getData() ;
    } , [])

    //! Delete customer
    const [deleteMessage , setDeleteMessage] = useState() ;
    const deleteAnCustomer = ( id ) => {
        AuthAxios.delete(`http://localhost:4000/v1/customers/delete/${id}`)
        .then(response => {
            setDeleteMessage(response.data.message) ;
            dispatch(deleteCustomer({id})) ;
        })
        .catch(error => console.log(error)) ;
    } 

    //! Block or unblock customer
    const blockOrUnblock = ( id ) => {
        AuthAxios.put(`http://localhost:4000/v1/customers/block-unblock/${id}`)
        .then(response => {
            window.location.reload() ;
        }).catch(error => console.log(error)) ;
    }

    return (
        <React.Fragment>

            <Header/>
            <LeftSideBar/>

            <main id="main" className="main">

            <div class="pagetitle">
                <h1> Customers </h1>
                <nav>
                    <ol class="breadcrumb">
                        <Link style={{ textDecoration:'none' }}> Home </Link>
                    </ol>
                </nav>
                {
                    deleteMessage && 
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong> Success : </strong> { deleteMessage }
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
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
                                    <th scope="col" width="10%"> Actions </th>
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
                                            { customer.active ? <td> <span className='badge bg-success'> Active </span> </td> : <td> <span className='badge bg-danger'> Blocked </span> </td> }
                                            { customer.valid_account ? <td> <span className='badge bg-success'> Verified </span> </td> : <td> <span className='badge bg-danger'> Unverified </span> </td> }
                                            <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                {
                                                    customer.active ? 
                                                    <>
                                                        <button onClick={() => { deleteAnCustomer(customer._id) }} className='btn btn-outline-danger'> <i className="fa-solid fa-trash"></i> </button>
                                                        <button onClick={() => { blockOrUnblock(customer._id) }} className='btn btn-outline-warning'> <i className="fa-solid fa-lock"></i> </button>
                                                    </> :
                                                    <>
                                                        <button onClick={() => { deleteAnCustomer(customer._id) }} className='btn btn-outline-danger'> <i className="fa-solid fa-trash"></i> </button>
                                                        <button onClick={() => { blockOrUnblock(customer._id) }} className='btn btn-outline-warning'> <i className="fa-solid fa-unlock"></i> </button>
                                                    </>
                                                }
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
