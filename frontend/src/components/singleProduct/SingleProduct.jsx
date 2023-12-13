import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCSS from './singleProduct.module.css';
import Navbar from '../../layouts/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { addProductToCart, getAllProducts } from '../../redux/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import SizeInfo from './SizeInfo';

function SingleProduct() {

  const dispatch = useDispatch() ;
  const { id } = useParams() ;

  const products = useSelector(state => state.product.products) ;
  const product = Object.values(products).filter(product => product._id === id) ;

  const addToCart = () => {
    if ( localStorage.getItem('token') ) {
        dispatch(addProductToCart(id)).then(response => {
          toast(response.payload.data) ;
        }) ;
    } else {
      toast('Please login to your account !') ;
    }
  }

  return (
    <React.Fragment>
      <ToastContainer/>
      <Navbar/>
    <div className = {`${ProductCSS.cardwrapper} container p-4`}>
    <div className = "row">
    
      <div className = {`${ProductCSS.productimgs} col-md-6`}>
        <div className = {ProductCSS.imgdisplay}>
          <div className = {ProductCSS.imgshowcase}>
            <img src={product[0].product_image[0]} alt="..." />
          </div>
        </div>
      </div>
    
      <div className = "col-md-6 p-4 d-flex flex-column">
        <h2 className = {ProductCSS.producttitle}> { product[0].product_name } </h2>

        <div className = {ProductCSS.productprice}>
          <p> { product[0].price } MAD </p>
        </div>
      
        <div className = {ProductCSS.productdetail}>
          <SizeInfo/>
          <div className = {ProductCSS.purchaseinfo}>
            <button onClick={addToCart} type = "button" className =  {`${ProductCSS.btn} mb-4`}>
              Add to Cart 
            </button>
            <button type = "button" className = {`${ProductCSS.btn} mb-4`}>
              Add to wish lit
            </button>
            <p>
              { product[0].long_description }
            </p>
          </div>
          <ul>
            <li> Available : <span> In stock </span> </li>
            <li> Category : <span> { product[0].subcategory_id.subcategory_name } </span> </li>
            <li> Shipping Area : <span> All over the country </span> </li>
            <li> Shipping Fee : <span> Free </span> </li>
          </ul>  
        </div>

        <div className={ProductCSS.view}>
          <p className = {`${ProductCSS.producttitle}  fw-medium fs-5`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              View Product Details
          </p>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h3 id="offcanvasRightLabel"  >
                Product Details
              </h3>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              ...
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
  </React.Fragment>
   
  )
}

export default SingleProduct;