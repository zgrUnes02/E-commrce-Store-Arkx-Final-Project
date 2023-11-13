import React, { useState } from 'react';
import { MDBBtn , MDBContainer , MDBCard , MDBCardBody , MDBInput , MDBRow , MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {

    const navigate = useNavigate() ;

    const [email , setEmail] = useState() ;
    const [password , setPassword] = useState() ;

    const login = (e) => {

        e.preventDefault() ;

        axios.post('http://localhost:4000/v1/users/login' , { email , password })
        .then(response => {
            if ( response.data.token ) {
                localStorage.setItem('token' , response.data.token) ;
                navigate('/dashboard') ;
            }
            else {
                console.log(response.data) ;
            }
        })
        .catch(error => console.log(error)) ;
    }

    return (

        <MDBContainer fluid style={{ width:'800px' , margin:'110px auto'}}>

            <MDBRow className='g-0 align-items-center'>
                
                <MDBCol col='6'>

                    <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
                        
                        <MDBCardBody className='p-5 shadow-5 text-center'>
                            
                            <h2 className="fw-bold mb-5"> Log in now </h2>

                            <form onSubmit={login}>

                                <MDBInput onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email' id='form3' type='email' required/>
                                <MDBInput onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form4' type='password' required/>
                                <MDBBtn type='submit' className='w-100 mb-4' size='md'> Log in </MDBBtn>

                            </form>

                        </MDBCardBody>

                    </MDBCard>

                </MDBCol>

                <MDBCol col='6'>
                    <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/005.jpg" class="w-100 rounded-4 shadow-4" alt="" fluid/>
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default App;