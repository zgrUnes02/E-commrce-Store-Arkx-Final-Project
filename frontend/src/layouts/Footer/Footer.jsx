import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className='footer mt-4'>
      <div className='footerin1'>
        <div className='f1'>
            <h3>AthlArk</h3>
          <p>Enjoy Your Time Like What You Want</p>
     

        </div>
        <div className='f2'>
          <h3>SHOP</h3>
          <a href='/' className='link stylenone'>
            <p>Women</p>
          </a>
          <a href='/' className='stylenone'>
            <p>Men</p>
          </a>
          <a href='/' className='stylenone'>
            <p>Tools</p>
          </a>
        </div>
        <div className='f2'>
          <h3>SERVICE</h3>
          <a href='/' className='stylenone'>
            <p>Sports field</p>
          </a>
          <a href='/' className='stylenone'>
            <p>TSwimming pool</p>
          </a>
          <a href='/' className='stylenone'>
            <p>Gym</p>
          </a>
        </div>
        <div className='f2'>
          <h3>Subscribe Now</h3>
          <p>Subscribe your email for newsletter and featured news based on your interest</p>
          <div className='inputcontainer'>
            <input type='text' placeholder='Enter your email' />
            <span className='icon2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>

            </span>
          </div>
        </div>
      </div>
      <div className='footerin2'>
        <h3>© Copyright 2023:Athlark ,Made with pain.  All rights reserved</h3>
      </div>
    </div>
  )
}

export default Footer