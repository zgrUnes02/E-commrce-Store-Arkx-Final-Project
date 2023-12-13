import React, { useEffect } from 'react' ;
import Navbar from '../layouts/Navbar/Navbar' ;
import Footer from '../layouts/Footer/Footer' ;
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProductFromWishList, getAllWishListProducts } from '../redux/wishListSlice';

function WishList() {

    const dispatch = useDispatch() ;
    const token = localStorage.getItem('token') ;

    useEffect(() => {
        dispatch(getAllWishListProducts()) ;
    } , []) ;

    const products = useSelector(state => state.wishList.wishList);

    //! Function for deleting product from wish list
    const deleteFromWish = ( id ) => {
        dispatch(deleteProductFromWishList(id))
    }

    return (
        <React.Fragment>
            <Navbar/>
            <section>
                {
                    token ? 

                    <section class="h-100 gradient-custom">

                        <div class="container py-5">
                            <div class="row d-flex justify-content-center my-4">
                            <div class="col-md-8">
                                <div class="card mb-4">
                                    
                                    <div class="card-header py-3">
                                        <h5 class="mb-0"> Wish list - { products.length } items </h5>
                                    </div>

                                    {
                                        products && products.map((product , index) => 
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                    <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                        <img src={ product.product[0].product_image[0] }
                                                            class="w-100" alt="Blue Jeans Jacket" />
                                                        <a href="#!">
                                                            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                    <p><strong> { product.product[0].product_name } </strong></p>
                                                    <p> Price : { product.product[0].price } MAD </p>
                                                    <p> Sku : { product.product[0].sku } </p>
                                                    <button onClick={() => {deleteFromWish(product._id)}} type="button" class="btn btn-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <hr class="my-4" />
                                        </div>
                                        )
                                    }
                                
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </section> : 
                        <div className="container mt-5">
                            <div className="jumbotron">
                                <h1 className="display-4">Welcome to Our Website</h1>
                                <p className="lead">Please log in to access the full features of our site.</p>
                                <hr className="my-4" />
                                <p>If you don't have an account, you can sign up <Link to={'/register/customer'} style={{ color:'red' }}><a style={{ color:'red' }} href="/signup">here</a>.</Link></p>
                                <p className="lead">
                                    <Link to={'/login/customer'}> <a className="btn btn-danger btn-lg" role="button">Log In</a> </Link>
                                </p>
                            </div>
                        </div>
                }
            </section>

            

            <Footer/>
        </React.Fragment>
    )
}

export default WishList ;
