import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { getAllOrders } from '../../redux/orderSlice';
import { Link } from 'react-router-dom';

function Orders() {

    const dispatch = useDispatch() ;
    const orders = useSelector(state => state.order.orders) ;

    useEffect(() => {
        const getData = async () => {
            const response = await AuthAxios.get('http://localhost:4000/v1/orders') ;
            dispatch(getAllOrders(response.data.docs)) ;
        }
        getData() ;
    } , [])

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Orders </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>
                </div>

                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">

                        <div class="card">
                            <div class="card-body">

                            <table class="table text-center table-responsive-lg">
                                <thead>
                                    <tr>
                                        <th scope="col"> # </th>
                                        <th scope="col"> Customer Name </th>
                                        <th scope="col"> Status </th>
                                        <th scope="col" width="14%"> Actions </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        orders?.map((order , index) =>
                                            <tr key={index}>
                                                <th> { index + 1 } </th>
                                                <td> { order.customer_id.first_name } { order.customer_id.last_name } </td>
                                                <td> { order.status } </td>
                                                <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                    <button className='btn btn-outline-success'> <i class="fa-solid fa-eye"></i> </button>
                                                    <button className='btn btn-outline-primary'> <i class="fa-solid fa-edit"></i> </button>
                                                    <button className='btn btn-outline-danger'> <i class="fa-solid fa-trash"></i> </button>
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

export default Orders ;
