import React from 'react' ;
import Navbar from '../../layouts/Navbar/Navbar';
import Home from '../../components/landingPage/Home/Home';
import Shop from '../../components/landingPage/Shop/Shop';
import Service from '../../components/landingPage/Service/Service';
import Footer from '../../layouts/Footer/Footer';

function LandingPage() {
    return (
        <React.Fragment>
            <Navbar/>
            <Home/>
            <Shop/>
            <Service/>
            <Footer/>
        </React.Fragment>
    )
}

export default LandingPage ;
