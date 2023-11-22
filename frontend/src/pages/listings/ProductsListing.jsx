import React, { useEffect, useState } from 'react' ;
import { useDispatch, useSelector } from 'react-redux' ;
import { getAllProducts } from '../../redux/productSlice' ;
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GreatProducts from '../../components/GreateProducts';
import ProductList from './ProductList';

function ProductsListing() {

    return (
        <React.Fragment>

            <Header/>

            {/* <div style={{ margin:"0 100px" , marginBottom:'50px' }} id="carouselExampleDark" class="carousel carousel-dark slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img style={{ height:'100%' , borderRadius:'20px'  }} src="https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='text-black'>First slide label</h5>
                        <p className='text-black'>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img style={{ height:'100%' , borderRadius:'20px' }} src="https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='text-white'>Second slide label</h5>
                        <p className='text-white'>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img style={{ height:'100%' , borderRadius:'20px' }} src="https://images.pexels.com/photos/1171480/pexels-photo-1171480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='text-white'>Third slide label</h5>
                        <p className='text-white'>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}
            
            <section class="">
            <div class="container">
                <div class="row gy-4">
                <div class="col-lg-6">
                    <div class="card-banner bg-gray h-100" style={{ 
                                                                minHeight: "200px" ,
                                                                backgroundSize: "cover" ,
                                                                backgroundPosition: "center" ,
                                                                width: "100%" ,
                                                                backgroundRepeat: "no-repeat" ,
                                                                top: "50%" ,
                                                                backgroundImage: "url('https://res.cloudinary.com/dm9jmhqox/image/upload/v1700249319/kunrmlm553f6zahmrmag.png')"}}>
                    <div class="p-3 p-lg-5" style={{maxWidth: "70%"}}>
                        <h3 class="text-dark">Best products & brands in our store at 50% off</h3>
                        <p>That's true but not always</p>
                        <button class="btn btn-warning shadow-0" href="/"> Claim offer </button>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row mb-3 mb-sm-4 g-3 g-sm-4">

                        <div class="col-6 d-flex">
                            <div class="card w-100 bg-primary" style={{minHeight: '200px'}}>
                                <div class="card-body">
                                    <h5 class="text-white"> Men </h5>
                                    <p class="text-white-50">Technology for cyber sport</p>
                                    <a class="btn btn-outline-light btn-sm" href="/"> See more </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 d-flex" style={{ borderRadius:'40px' }}>
                            <div class="card w-100 bg-primary" style={{minHeight: '200px'}}>
                            <div class="card-body">
                                <h5 class="text-white"> Women </h5>
                                <p class="text-white-50">All you need for music</p>
                                <a class="btn btn-outline-light btn-sm" href="/"> See more </a>
                            </div>
                            </div>
                        </div>

                    </div>

                    <div class="card bg-success" style={{minHeight: '200px'}}>
                        <div class="card-body">
                            <h5 class="text-white">Buy 2 items, With special gift</h5>
                            <p class="text-white-50" style={{maxWidth: '400px'}}>Buy one, get one free marketing strategy helps your business improves the brand by sharing the profits</p>
                            <a class="btn btn-outline-light btn-sm" href="/"> See more </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <GreatProducts/>
            <ProductList/>
            <Footer/>

        </React.Fragment>
    )
}

export default ProductsListing ;
