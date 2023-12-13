import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Shop.css'
import { Link } from 'react-router-dom' ;


function Shop() {
  return (
     <div className=' container '>

        <div className='d-flex justify-content-center'>
            <h3 className="mb-7 display-3 fw-bold">Shop 
                <span className="mb-7 text-danger fw-bold"> Now</span> 
            </h3>
        </div>

        <div className="container-md px-5 py-2 lg:px-32 lg:pt-12">
            <div className="row row-cols-1 row-cols-md-3 g-2">
            
                <div className="col">
                <div className="custom-container">
                    <span className="custom-card">
                        <img alt="gallery" className="custom-img" src="https://i.pinimg.com/736x/31/30/2e/31302e5bd4001ebe3de4fa113844587a.jpg" />
                        <div className="custom-overlay"></div>
                        <span className="custom-text">MEN</span>
                    </span>
                    </div>
                </div>

                <div className="col pt-5">
                <div className="custom-container">
                    <span className="custom-card">
                        <img alt="gallery" className="custom-img" src="https://i.pinimg.com/236x/97/e1/3f/97e13fb68e05bb55b7d9890a010afb5c.jpg" />
                        <div className="custom-overlay"></div>
                        <span className="custom-text">WOMEN</span>
                    </span>
                    </div>
                </div>

                <div className="col">
                <div className="custom-container">
                    <span className="custom-card">
                        <img alt="gallery" className="custom-img" src="https://images.pexels.com/photos/4793221/pexels-photo-4793221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <div className="custom-overlay"></div>
                        <span className="custom-text">TOOLS</span>
                    </span>
                    </div>
                </div> 
            </div>
        </div>

        <div className="bg-img container-md px-5 py-2 lg:px-32 lg:pt-12">
            <div className='sous-titre'>
            <h3 className="fs-2 fw-bold text-black display-2  tracking-tight">
                YOU TAKE O
                <span className="fs-2 fw-bold text-white display-2  tracking-tight pt-70">N THE COLD.</span><br/>
                WE BRING
                <span className=" fs-2 fw-bold text-danger display-2  tracking-tight"> THE HEAT.</span>
            </h3>
            </div>
        </div>

        <div className="d-flex justify-content-center shop">
            <Link to={'/store/products'}> <button className="shop-button">Shop Now</button> </Link>
        </div>

  </div>
  )
}

export default Shop