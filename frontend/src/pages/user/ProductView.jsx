import React from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link , useParams } from 'react-router-dom' ;
import { useSelector } from 'react-redux' ;

function ProductView() {
    
    const { id } = useParams() ;
    const products = useSelector(state => state.product.products) ;
    const product = products.find(product => product._id === id) ;

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Show { product.product_name } </h1>
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
                                <div className="card-body" style={{ display:'flex' , justifyContent:'space-between' }}>

                                <div className="container mt-5 ">

                                    <div className="row ">

                                        <div className="col-md-6 ">

                                            <img src={product.product_image} alt="Product" />
                                            <Link to={'/products'}> <button className='btn btn-primary mt-3' > Back </button> </Link>
                                        </div>
                                        <div className="col-md-6 pt-8 ">

                                        <h3 className="text-primary"> { product.subcategory_id.subcategory_name } </h3>


                                        <h2 className='fw-bold fs-2 pt-2'> { product.product_name } </h2>


                                        <div className='pt-6'>
                                            <table className="table table-hover">
                                                <tbody>

                                                <tr>
                                                    <th scope="row"> Available  </th>
                                                    <td>  </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row"> Price  </th>
                                                    <td> { product.price } MAD </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row"> Quantity  </th>
                                                    <td >{' '}</td>
                                                </tr>

                                                <tr>
                                                    <th scope="row" > Size  </th>
                                                    <td >
                                                        {
                                                            product.options?.map((option) => 
                                                                <span> { option } </span>
                                                            )
                                                        }
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row"> Description </th>
                                                    <td>
                                                        { product.long_description } <br /> 
                                                        { product.short_description }
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                        </div>
                                    </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>
        </React.Fragment>
    )
}

export default ProductView ;
