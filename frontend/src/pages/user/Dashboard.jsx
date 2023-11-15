import React from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link } from 'react-router-dom' ;
import { useDispatch } from 'react-redux';
import { getAllUsers, userProfile } from '../../redux/userSlice';
import { useEffect } from 'react';
import { getAllCategories } from '../../redux/categorySlice';
import { getAllSubcategories } from '../../redux/subcategorySlice';
import { getAllProducts } from '../../redux/productSlice';
import { getAllServices } from '../../redux/serviceSlice';
import { getAllCompanies } from '../../redux/companySlice';
import { getAllOrders } from '../../redux/orderSlice';
import { getAllCustomers } from '../../redux/customerSlice';

function Dashboard() {

    const dispatch = useDispatch() ;
    useEffect(() => {
        dispatch(userProfile()) ;
        dispatch(getAllCategories()) ;
        dispatch(getAllSubcategories()) ;
        dispatch(getAllProducts()) ;
        dispatch(getAllServices()) ;
        dispatch(getAllUsers()) ;
        dispatch(getAllCompanies()) ;
        dispatch(getAllOrders()) ;
        dispatch(getAllCustomers()) ;
    } , [])
    
    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Dashboard </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>
                </div>

                <section className="section">

                    <div className="row">

                        <div class="col col-md-3">
                            <Link to={'/categories'} style={{ textDecoration:'none' }}>
                            <div>
                                <div class="card info-card sales-card">
                                    <div class="card-body">
                                        <h1 class="card-title" style={{ fontSize:'20px' , fontWeight:'600' , color:'#012970'}}> Categories </h1>
                                        <div class="d-flex align-items-center" style={{ display:'flex' , justifyContent:'space-between' , alignItems:'center' }}>
                                            <i class="fa-solid fa-paste" style={{ color:'#012970' , fontSize:'25px' }}></i>
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> 20 </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div class="col col-md-3" >
                            <Link to={'/subcategories'} style={{ textDecoration:'none' }}>
                            <div>
                                <div class="card info-card sales-card">
                                    <div class="card-body">
                                        <h1 style={{ fontSize:'20px' , fontWeight:'600' , color:'#012970' }} class="card-title"> Subcategories </h1>
                                        <div class="d-flex align-items-center" style={{ display:'flex' , justifyContent:'space-between' , alignItems:'center' }}>
                                            <i class="fa-solid fa-file-circle-plus" style={{ color:'#012970' , fontSize:'25px' }}></i>
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> 20 </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div class="col col-md-3" >
                            <Link to={'/products'} style={{ textDecoration:'none' }}>
                            <div>
                                <div class="card info-card sales-card">
                                    <div class="card-body">
                                        <h1 style={{ fontSize:'20px' , fontWeight:'600' , color:'#012970' }} class="card-title"> Products </h1>
                                        <div class="d-flex align-items-center" style={{ display:'flex' , justifyContent:'space-between' , alignItems:'center' }}>
                                            <i class="fa-solid fa-shirt" style={{ color:'#012970' , fontSize:'25px' }}></i>
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> 20 </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div class="col col-md-3" >
                            <Link to={'/services'} style={{ textDecoration:'none' }}>
                            <div>
                                <div class="card info-card sales-card">
                                    <div class="card-body">
                                        <h1 style={{ fontSize:'20px' , fontWeight:'600' , color:'#012970' }} class="card-title"> Services </h1>
                                        <div class="d-flex align-items-center" style={{ display:'flex' , justifyContent:'space-between' , alignItems:'center' }}>
                                            <i class="fa-solid fa-bell-concierge"  style={{ color:'#012970' , fontSize:'25px' }}></i>
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> 20 </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div class="col col-md-3" >
                            <Link to={'/users'} style={{ textDecoration:'none' }}>
                            <div>
                                <div class="card info-card sales-card">
                                    <div class="card-body">
                                        <h1 style={{ fontSize:'20px' , fontWeight:'600' , color:'#012970' }} class="card-title"> Users </h1>
                                        <div class="d-flex align-items-center text-white" style={{ display:'flex' , justifyContent:'space-between' , alignItems:'center' }}>
                                            <i class="fa-solid fa-user-shield"  style={{ color:'#012970' , fontSize:'25px' }}></i>
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> 20 </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div class="col col-md-3" >
                            <Link to={'/customers'} style={{ textDecoration:'none' }}>
                            <div>
                                <div class="card info-card sales-card" >
                                    <div class="card-body">
                                        <h1 style={{ fontSize:'20px' , fontWeight:'600' , color:'#012970' }} class="card-title"> Customers </h1>
                                        <div class="d-flex align-items-center" style={{ display:'flex' , justifyContent:'space-between' , alignItems:'center' }}>
                                            <i class="fa-solid fa-users" style={{ color:'#012970' , fontSize:'25px' }}></i>
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> 20 </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div class="col col-md-3" >
                            <Link to={'/companies'} style={{ textDecoration:'none' }}>
                            <div>
                                <div class="card info-card sales-card">
                                    <div class="card-body">
                                        <h1 style={{ fontSize:'20px' , fontWeight:'600' , color:'#012970' }} class="card-title"> Companies </h1>
                                        <div class="d-flex align-items-center" style={{ display:'flex' , justifyContent:'space-between' , alignItems:'center' }}>
                                            <i class="fa-solid fa-building" style={{ color:'#012970' , fontSize:'25px' }}></i>
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> 20 </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div class="col col-md-3" >
                            <Link to={'/orders'} style={{ textDecoration:'none' }}>
                            <div>
                                <div class="card info-card sales-card" >
                                    <div class="card-body" >
                                        <h1 style={{ fontSize:'20px' , fontWeight:'600' , color:'#012970' }} class="card-title"> Orders </h1>
                                        <div class="d-flex align-items-center" style={{ display:'flex' , justifyContent:'space-between' , alignItems:'center' }}>
                                            <i class="fa-solid fa-folder-plus" style={{ color:'#012970' , fontSize:'25px' }}></i>
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> 20 </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>                        

                    </div>

                </section>

            </main>
        </React.Fragment>
    )
}

export default Dashboard
