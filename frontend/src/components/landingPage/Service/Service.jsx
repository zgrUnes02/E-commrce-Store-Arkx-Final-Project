import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css';

function Service() {
  return (
    <div className='container'>
    <div className='pt-4 d-flex justify-content-center'>
        <h3 className="mb-7 mt-5 display-3 fw-bold">Ready To 
            <span className="mb-7 text-danger fw-bold"> Play?</span> 
        </h3>
    </div>
    
    <div className='relative-container'>
    <img 
        src="https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />   
    <div className="overlay-background">
      <div className="content-container ">
        <div className="text-content ">
          <div className="">
              <h3 className="text-danger display-2 fw-bold tracking-tight">
              MORE
              <span className="text-white"> COMFORT</span><br/>
              MORE
              <span className="text-white"> SPEED</span><br/>
              NO
              <span className="text-white"> LIMITS</span><br/>
            </h3>
            <div >
              <a className="button1" href="#!" role="button">Let's Play</a>
            </div>
          </div>    
        </div>
        </div>
      </div>
    </div> 


    <div className="container-md px-5 py-2 lg:px-32 lg:pt-12">
      <div className="row row-cols-1 row-cols-md-3 g-2">
              
        <div className="col">
          
            <div className="custom1-container">
                <span className="custom1-card">
                    <img alt="gallery" className="custom1-img" src="https://images.pexels.com/photos/18986953/pexels-photo-18986953/free-photo-of-homme-jouer-sport-jeu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <div className="custom1-overlay"></div>
                    <span className="custom1-text">SPORT FIELD</span>
                </span>
                </div>
            </div>

            <div className="col ">
            <div className="custom1-container">
                <span className="custom1-card">
                    <img alt="gallery" className="custom1-img" src="https://images.pexels.com/photos/9030270/pexels-photo-9030270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <div className="custom1-overlay"></div>
                    <span className="custom1-text">SWIMMING POOL</span>
                </span>
                </div>
            </div>

              <div className="col">
            <div className="custom1-container">
                <span className="custom1-card">
                    <img alt="gallery" className="custom1-img" src="https://images.pexels.com/photos/4753996/pexels-photo-4753996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <div className="custom1-overlay"></div>
                    <span className="custom1-text">GYM</span>
                </span>
                </div>
            </div> 

        </div>
      </div>

    </div>    
  )
}

export default Service