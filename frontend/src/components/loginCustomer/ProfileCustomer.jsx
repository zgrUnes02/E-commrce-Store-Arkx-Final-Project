import React, { useEffect } from 'react' ;
import Navbar from '../../layouts/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerProfile } from '../../redux/customerSlice';

function ProfileCustomer() {


    const first_name = localStorage.getItem('first_name') ;
    const last_name = localStorage.getItem('last_name') ;
    const email = localStorage.getItem('email') ;

    return (
        <React.Fragment>
            <Navbar/>
            <div class="container rounded bg-white mb-5">
                <div>

                    <div style={{ width:'300px' }}>
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                            <span class="font-weight-bold"> { first_name } { last_name } </span>
                            <span class="text-black-50"> { email } </span>
                        </div>
                    </div>

                    <div>

                        <div class="p-3 py-5">

                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right"> Orders : </h4>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}

export default ProfileCustomer ;
