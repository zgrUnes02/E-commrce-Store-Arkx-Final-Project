import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { Link } from 'react-router-dom';
import { deleteProduct, getAllProducts } from '../../redux/productSlice';
import DataTable from 'datatables.net-dt' ;

function Products() {

    const dispatch = useDispatch() ;
    useEffect(() => { dispatch(getAllProducts()) } , [])
    const products = useSelector(state => state.product.products) ;

    new DataTable('#dataTable') ;

    //! Delete product
    const handleDelete = ( id ) => {
        dispatch(deleteProduct(id)) ;
    }

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" className="main">

                <div class="pagetitle">
                    <h1> Products </h1>
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

                            <table id='dataTable' className="table table-responsive-lg">
                                <thead>
                                    <tr>
                                        <th scope="col"> # </th>
                                        <th scope="col"> Product Name </th>
                                        <th scope="col"> Subcategory Name </th>
                                        <th scope="col"> Price </th>
                                        <th scope="col"> Activation </th>
                                        <th scope="col" width="14%"> Actions </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        products?.map((product , index) => 
                                            <tr key={index}>
                                                <th> { index + 1 } </th>
                                                <td> { product.product_name } </td>
                                                <td> { product.subcategory_id.subcategory_name } </td>
                                                <td> { product.price } MAD </td>
                                                { product.active ? <td> <span class='badge bg-success'> Active </span> </td> : <td> <span class='badge bg-danger'> Inactive </span> </td> }
                                                <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                    <Link to={`/products/show/${product._id}`}> <button className='btn btn-outline-success'> <i className="fa-solid fa-eye"></i> </button> </Link>
                                                    <Link to={`/products/update/${product._id}`}> <button className='btn btn-outline-primary'> <i className="fa-solid fa-edit"></i> </button> </Link>
                                                    <button onClick={() => { handleDelete(product._id) }} className='btn btn-outline-danger'> <i className="fa-solid fa-trash"></i> </button>
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

export default Products ;
