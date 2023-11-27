import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sport from '../../../assets/videos/sport.mp4';
import { FiPhoneCall, FiDollarSign, FiTruck } from "react-icons/fi"
import './Home.css';

function Home() {
  return (
    <div className='container mt-4' > 
        <h1 className="mb-6 text-danger display-2 fw-bold tracking-tight">
            BE 
            <span className="text-black"> UNSTOPPABLE</span>
        </h1>
        <h3 className="soustitle mb-8 text-black fs-4 fw-bold">THE HARDER 
            <span className="mb-8 text-3xl text-danger fs-4 fw-bold"> THE STRUGGLE,</span> THE MORE GLORIOUS 
            <span className="mb-8 text-3xl text-danger fs-4 fw-bold"> THE TRUIMPH.</span>
        </h3>
        <div>
            <video className='bg-video object-cover ' 
            src={sport}
            autoPlay 
            loop 
            muted
            />
        </div>

        <div className="features">
            <div className="feature">
                <FiTruck size={28} className='featureIcon' style={{color: 'red'}} />
                <span className="featureTitle">FREE SHIPPING</span>
                <span className="featureDesc">Fast Shipping for All Order.</span>
            </div>
            <div className="feature">
                <FiDollarSign size={30} className='featureIcon' style={{color: 'red'}} />
                <span className="featureTitle">30 DAYS RETURN</span>
                <span className="featureDesc"> 30 Days Money Back.</span>
            </div>
            <div className="feature">
               <FiPhoneCall size={30} className='featureIcon' style={{color: 'red'}} />   
                <span className="featureTitle">CONTACT US!</span>
                <span className="featureDesc">Technical Support 24/7</span>
            </div>
        </div>
  </div>
  )
}

export default Home