import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { deleteProduct, getAllProducts } from '../../redux/productSlice';
import { Link } from 'react-router-dom';

function Products() {

    const dispatch = useDispatch() ;
    const products = useSelector(state => state.product.products) ;

    //! UseEffect
    useEffect(() => {
        const getData = async () => {
            const response = await AuthAxios.get('http://localhost:4000/v1/products') ;
            dispatch(getAllProducts(response.data.docs)) ;
        }
        getData() ;
    } , [])

    //! Delete product
    const [messageDelete , setMessageDelete] = useState() ;
    const handleDelete = ( id ) => {
        AuthAxios.delete(`http://localhost:4000/v1/product/${id}`)
        .then(response => {
            setMessageDelete(response.data.message) ;
            dispatch(deleteProduct({id})) ;
        })
        .catch(error => console.log(error)) ;
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
                            <Link style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>
                    {
                        messageDelete && 
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong> Success : </strong> { messageDelete }
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
                                                <button className='btn btn-outline-success'> <i className="fa-solid fa-eye"></i> </button>
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
