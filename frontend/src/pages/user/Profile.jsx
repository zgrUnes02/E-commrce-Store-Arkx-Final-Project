import React from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link } from 'react-router-dom' ;
import Overview from '../../components/profile/Overview' ;
import EditInformation from '../../components/profile/EditInformation' ;
import ChangePassword from '../../components/profile/ChangePassword' ;
import ImageAndName from '../../components/profile/ImageAndName';
import { useSelector } from 'react-redux' ;

function Profile() {

    const id = localStorage.getItem('id') ;
    const users = useSelector(state => state.user.users) ;
    const currentUser = users.find(user => user._id === id) ;

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> My profile </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link to={'/dashboard'} style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>
                </div>

                <section class="section profile">
                    <div class="row">

                        <ImageAndName currentUser={currentUser} />

                        <div class="col-xl-8">

                            <div class="card">

                                <div class="card-body pt-3">

                                    <ul class="nav nav-tabs nav-tabs-bordered">
                                        <li class="nav-item">
                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                        </li>

                                        <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                                        </li>

                                        <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                                        </li>
                                    </ul>

                                    <div class="tab-content pt-2">
                                        <Overview currentUser={currentUser} />
                                        <EditInformation currentUser={currentUser} />
                                        <ChangePassword currentUser={currentUser} />
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

export default Profile
