import React from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link } from 'react-router-dom' ;
import { useDispatch } from 'react-redux';
import { userProfile } from '../../redux/userSlice';

function Dashboard() {

    const dispatch = useDispatch() ;
    dispatch(userProfile())
    
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

                        <div class="col col-md-3" >
                            <div href="/">
                                <div class="card info-card sales-card" >
                                    <div class="card-body">
                                        <h5 class="card-title"> Users </h5>

                                        <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="fa-solid fa-message"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6> hhhh </h6>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col col-md-3" >
                            <div href="/">
                                <div class="card info-card sales-card" >
                                    <div class="card-body">
                                        <h5 class="card-title"> Products </h5>

                                        <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="fa-solid fa-message"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6> hhhh </h6>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col col-md-3" >
                            <div href="/">
                                <div class="card info-card sales-card" >
                                    <div class="card-body">
                                        <h5 class="card-title"> Services </h5>
                                        <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="fa-solid fa-users"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6> hhhh </h6>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div class="col col-md-3" >
                            <div href="/">
                                <div class="card info-card sales-card" >
                                    <div class="card-body">
                                        <h5 class="card-title"> Orders </h5>

                                        <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="fa-solid fa-message"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6> hhhh </h6>
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

export default Dashboard
