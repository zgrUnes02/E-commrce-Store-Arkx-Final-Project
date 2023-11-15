import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link , useNavigate, useParams } from 'react-router-dom' ;
import { useDispatch, useSelector } from 'react-redux' ;
import axios from 'axios' ;
import { getAllSubcategories } from '../../redux/subcategorySlice' ;
import { createNewProduct } from '../../redux/productSlice';

function ProductView() {

    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;
    const { id } = useParams() ;

    const subcategories = useSelector(state => state.subcategory.subcategories) ;
    const products = useSelector(state => state.product.products) ;
    const product = products.find(product => product._id === id) ;

    console.log(product) ;


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

                                    <div style={{ width:'50%' , height:'100%' }} id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

                                        <div class="carousel-inner">
                                            {
                                                product.product_image.map(image => 
                                                    <div class="carousel-item active">
                                                        <img src={image} class="d-block w-100" alt="..." />
                                                    </div>
                                                )
                                            }
                                        </div>

                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>

                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>

                                    </div>

                                    <div style={{ width:'400px' }}>

                                        <div class="tab-pane fade show active profile-overview" id="profile-overview">
                    
                                            <h1 class="card-title" style={{ fontSize:'30px' , marginBottom:'20px' }}> Product Details : </h1>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label "> Sku </div>
                                                <div class="col-lg-9 col-md-8"> {product.sku} </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label "> Product Name </div>
                                                <div class="col-lg-9 col-md-8"> { product.product_name} </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label "> Username </div>
                                                <div class="col-lg-9 col-md-8"> g </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Email</div>
                                                <div class="col-lg-9 col-md-8"> g </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label"> Role </div>
                                                <div class="col-lg-9 col-md-8"> g </div>
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
