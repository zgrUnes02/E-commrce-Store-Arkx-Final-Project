import React, { useEffect, useState } from 'react' ;
import Navbar from '../layouts/Navbar/Navbar' ;
import Footer from '../layouts/Footer/Footer' ;
import { useDispatch, useSelector } from 'react-redux';
import { checkout, decreaseProductQuantity, deleteProductFromCart, getAllProductToCart, increaseProductQuantity } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {

    const dispatch = useDispatch() ;
    const token = localStorage.getItem('token') ;

    useEffect(() => {
        token && dispatch(getAllProductToCart()) ;
    } , []) ;

    const products = useSelector(state => state.cart.cart);
    const [totalPrice , setTotalPrice] = useState(products.reduce((sum, product) => sum + product.product[0].price * product.quantity , 0)) ;
    
    //! Function to decrease the product's quantity
    const increaseQuantity = ( id ) => {
        dispatch(increaseProductQuantity(id)) ;
    }

    //! Function to increase the product's quantity
    const decreaseQuantity = ( id ) => {
        dispatch(decreaseProductQuantity(id)) ;
    }

    //! Function for deleting product from cart
    const deleteFromCart = ( id ) => {
        dispatch(deleteProductFromCart(id)) ;
    }

    //! Function for checking out
    const checkoutFromCart = () => {
        dispatch(checkout()) ;
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
                                        <h5 class="mb-0"> Cart - { products.length } items </h5>
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
                                                    <button onClick={() => deleteFromCart(product._id)} type="button" class="btn btn-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </div>

                                                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">

                                                    <div class="d-flex mb-4" style={{maxWidth: "300px" , display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
                                                        <button onClick={() => decreaseQuantity(product._id)} class="btn btn-danger px-3 me-2">
                                                            <i class="fas fa-minus"></i>
                                                        </button>

                                                        <div class="form-outline mt-2">
                                                            <input name="quantity" value={product.quantity} class="form-control" readOnly />
                                                        </div>

                                                        <button onClick={() => increaseQuantity(product._id)} class="btn btn-danger px-3 ms-2">
                                                            <i class="fas fa-plus"></i>
                                                        </button>
                                                    </div>

                                                    <p class="text-start text-md-center">
                                                        <strong> { product.product[0].price * product.quantity } MAD  </strong>
                                                    </p>
                                                </div>
                                            </div>

                                            <hr class="my-4" />
                                        </div>
                                        )
                                    }
                                
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                                <div class="card mb-4">
                                <div class="card-header py-3">
                                    <h5 class="mb-0">Summary</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Total price
                                        <span> { totalPrice } MAD </span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>Free</span>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                        <strong> Total amount </strong>
                                        <strong>
                                            <p class="mb-0"> ( including VAT ) </p>
                                        </strong>
                                        </div>
                                        <span><strong> { totalPrice } MAD </strong></span>
                                    </li>
                                    </ul>

                                    <button onClick={checkoutFromCart} type="button" class="btn btn-danger btn-lg btn-block">
                                        Go to checkout
                                    </button>
                                </div>
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

export default Cart ;
