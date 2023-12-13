import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
        <div class="footer-container">
         
            <div class="footer-company-box">
                <a href="#" class="footer-logo">ATHLARK</a>
                <p>ATHLARK isn't just a name - it's our vision to gear up athletes for victory.</p>
            </div>

            <div class="footer-link-box">
                <strong>Main Link's</strong>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-link-box">
                <strong>External Link's</strong>
                <ul>
                    <li><a href="#">Our Product's</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Trem's and Condition's</a></li>
                </ul>
            </div>

            <div class="footer-link-box">
                <strong>Payment</strong>
                <ul>
                    <li><a href="#">Visa</a></li>
                    <li><a href="#">mastercard</a></li>
                    <li><a href="#">Paypal</a></li>
                    <li><a href="#">GoolePay</a></li>
                </ul>
            </div>

        </div>

        <div class="footer-bottom">
            <span class="footer-owner">Created by Imane's students</span>
            <span class="copyright">&#169; Copyright 2023 -  ATHLARK</span>
        </div>
    </footer>
  )
}

export default Footer