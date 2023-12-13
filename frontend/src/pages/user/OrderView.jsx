import React, { useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link, useNavigate, useParams } from 'react-router-dom' ;
import { useSelector } from 'react-redux';

function OrderView() {

    const { id } = useParams() ;

    const customers = useSelector(state => state.customer.customers) ;
    const customer = customers.find(customer => customer._id === id) ;

    const orders = useSelector(state => state.order.orders) ;
    const order = orders.find(order => order.customer_id._id === id && order.type === "product") ;

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">
                <div class="pagetitle">
                    <h1> Orders - <span style={{ textTransform:'capitalize' }}> { customer.first_name } { customer.last_name } </span> </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link to={'/dashboard'} style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">

                                <table id='dataTable' className="table table-responsive-lg text-center">
                                <thead>
                                    <tr>
                                        <th scope="col"> # </th>
                                        <th scope="col"> Image </th>
                                        <th scope="col"> Product Name </th>
                                        <th scope="col"> Price </th>
                                        <th scope="col"> Quantity </th>
                                        <th scope="col"> Total price </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        order.order_items.map((order , index) => 
                                            <tr key={index}>
                                                <th> { index + 1 } </th>
                                                <td>
                                                    <img style={{ width:'100px' }} src={ order.product[0].product_image[0] } alt="" />
                                                </td>
                                                <td> { order.product[0].product_name } </td>
                                                <td> { order.product[0].price } MAD </td>
                                                <td> { order.quantity } </td>
                                                <td> { order.quantity * order.product[0].price } MAD </td>
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

export default OrderView ;