import React, { useEffect } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { getAllOrders } from '../../redux/orderSlice' ;
import { Link } from 'react-router-dom' ;
import DataTable from 'datatables.net-dt' ;

function Orders() {

    const dispatch = useDispatch() ;
    useEffect(() => { dispatch(getAllOrders()) } , []) ;
    const orders = useSelector(state => state.order.orders) ;

    new DataTable('#dataTable') ;

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Orders </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link to={'/dashboard'} style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>
                </div>

                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">

                        <div class="card">
                            <div class="card-body">

                            <table id='dataTable' class="table table-responsive-lg">
                                <thead>
                                    <tr>
                                        <th scope="col"> # </th>
                                        <th scope="col"> Customer Name </th>
                                        <th scope="col"> Status </th>
                                        <th scope="col"> Type </th>
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
                                                <td> { order.type } </td>
                                                <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                    {
                                                        order.type === "product" ? 
                                                        <Link to={`/orders/view/${order.customer_id._id}`}><button className='btn btn-outline-success'> <i class="fa-solid fa-eye"></i> </button></Link> :
                                                        <Link to={`/orders/service/view/${order.customer_id._id}`}><button className='btn btn-outline-success'> <i class="fa-solid fa-eye"></i> </button></Link>
                                                    }
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
