import React, { useEffect, useState } from 'react' ;
import { useDispatch, useSelector } from 'react-redux' ;
import { getAllProducts } from '../../redux/productSlice' ;

function ProductsListing() {

    const dispatch = useDispatch() ;
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]') ;

    const [cart , setCart] = useState(cartFromLocalStorage) ;

    useEffect(() => { 
        dispatch(getAllProducts())  ;
        localStorage.setItem('cart' , JSON.stringify(cart)) ;
    } , [ cart ])

    const products = useSelector(state => state.product.products) ;


    const addToCart = ( product ) => {
        setCart([...cart , product]) ;
        console.log(cart)
    }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">All Products</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                    <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        
                        {
                            products?.map((product , index) => 
                                <div className="col mb-5" key={index}>
                                    <div className="card h-100">
                                        <img className="card-img-top" src={product.product_image} alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder"> { product.product_name } </h5>
                                                { product.price } MAD
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center" style={{ display:'flex' , justifyContent:'space-between' , alignItems:'center' }}>
                                                <button className="btn btn-outline-dark mt-auto"> View product </button>
                                                <button className="btn btn-outline-dark mt-auto" onClick={() => { addToCart(product) }}> <i class="fa-solid fa-cart-shopping"></i>  </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ProductsListing ;
