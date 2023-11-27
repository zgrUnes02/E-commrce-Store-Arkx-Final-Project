import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GreatProducts from '../../components/GreateProducts';
import ProductList from './ProductList';
import style from './greatProducts.module.css';

function ProductsListing() {

    return (
        <React.Fragment>

            <Header/>
            
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
                                    <p class="text-white-50">
                                        Upgrade your wardrobe with this trendy men's shirt. Perfect for both casual and semi-formal occasions, this shirt combines comfort and style effortlessly. Available in multiple sizes and colors.
                                    </p>
                                    <a class="btn btn-outline-light btn-sm" href="/"> See more </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 d-flex" style={style.greatProduct}>
                            <div class="card w-100 bg-primary" style={{minHeight: '200px'}}>
                            <div class="card-body">
                                <h5 class="text-white"> Women </h5>
                                <p class="text-white-50">
                                    Add a touch of sophistication to your wardrobe with this elegant women's dress. Perfect for special occasions or a night out, the flattering design and quality fabric make it a must-have. Available in various sizes and colors.
                                </p>
                                <a class="btn btn-outline-light btn-sm" href="/"> See more </a>
                            </div>
                            </div>
                        </div>

                    </div>

                    <div class="card bg-success" style={{minHeight: '200px'}}>
                        <div class="card-body">
                            <h5 class="text-white">Buy 2 items, With special gift</h5>
                            <p class="text-white-50" style={{maxWidth: '400px'}}>
                                Upgrade your wardrobe with our exclusive bundle offer! Buy any 2 items and receive a special gift with your purchase. Choose from our stylish collection of men's and women's clothing. Limited stock available.
                            </p>
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
