import React, { PureComponent } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link } from 'react-router-dom' ;
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, userProfile } from '../../redux/userSlice';
import { useEffect } from 'react';
import { getAllCategories } from '../../redux/categorySlice';
import { getAllSubcategories } from '../../redux/subcategorySlice';
import { getAllProducts } from '../../redux/productSlice';
import { getAllServices } from '../../redux/serviceSlice';
import { getAllCompanies } from '../../redux/companySlice';
import { getAllOrders } from '../../redux/orderSlice';
import { getAllCustomers } from '../../redux/customerSlice'; 
import { ComposedChart , Line , Bar , XAxis , YAxis , CartesianGrid , Tooltip , Legend } from 'recharts';

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
    } , []) ;

    //! Lengths 
    const categoryLength = useSelector(state => state.category.categories) ;
    const subcategoryLength = useSelector(state => state.subcategory.subcategories) ;
    const productLength = useSelector(state => state.product.products) ;
    const serviceLength = useSelector(state => state.service.services) ;
    const userLength = useSelector(state => state.user.users) ;
    const companyLength = useSelector(state => state.company.companies) ;
    const orderLength = useSelector(state => state.order.orders) ;
    const customerLength = useSelector(state => state.customer.customers) ;

    //! Left chart
    const data = [
        {
          name: 'Week 1',
          uv: 120,
        },
        {
          name: 'Week 2',
          uv: 130,
        },
        {
          name: 'Week 3',
          uv: 140,
        },
        {
          name: 'Week 4',
          uv: 180,
        },
        {
          name: 'Week 5',
          uv: 200,
        },
        {
          name: 'Week 6',
          uv: 121,
        },
      ];
        
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
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> { categoryLength.length } </h6>
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
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> { subcategoryLength.length } </h6>
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
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> { productLength.length } </h6>
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
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> { serviceLength.length } </h6>
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
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> { userLength.length } </h6>
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
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> { customerLength.length } </h6>
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
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> { companyLength.length } </h6>
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
                                            <h6 style={{ color:'#012970' , fontWeight:'600' }}> { orderLength.length } </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>                        

                    </div>

                </section>

                <section className="section">

                    <div className="row">

                        <div className="col col-md-6" >
                            <div>
                                <div className="card info-card sales-card"  >
                                    <ComposedChart className='mt-5 col' width={500} height={500} data={data}
                                        margin={{
                                            top: 20,
                                            right: 20,
                                            bottom: 20,
                                            left: 20,
                                        }} 
                                    >
                                        <CartesianGrid stroke="#f5f5f5" />
                                        <XAxis dataKey="name" scale="band" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                                    </ComposedChart>
                                </div>
                            </div>
                        </div> 

                        <div className="col col-md-6" >
                            <div>
                                <div className="card info-card sales-card"  >
                                    <ComposedChart className='mt-5 col' width={500} height={500} data={data}
                                        margin={{
                                            top: 20,
                                            right: 20,
                                            bottom: 20,
                                            left: 20,
                                        }} 
                                    >
                                        <CartesianGrid stroke="#f5f5f5" />
                                        <XAxis dataKey="name" scale="band" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                                    </ComposedChart>
                                </div>
                            </div>
                        </div> 

                    </div>
                
                </section>

            </main>
        </React.Fragment>
    )
}

export default Dashboard
