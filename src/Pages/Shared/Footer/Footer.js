import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer'>
                <div className='logo'>
                    <h2 className="nav-header-footer">Restaur<span>a</span> </h2>
                    <p>Catering is not just all about food. It’s about excellent service as well. Great food, great service, anywhere anytime.</p>
                    <div className='social icons'>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>
                <div className='contact'>
                    <h2>Contact Us</h2>
                    <li><i class="fa-solid fa-location-dot"></i>Dhanmondi 10/A, Dhaka</li>
                    <li><i class="fa-solid fa-phone"></i>+8809654788</li>
                    <li><i class="fa-regular fa-envelope"></i>rskrrudra9111999@gmail.com</li>
                </div>

                <div className="subscribe">
                    <h2>Subscribe</h2>
                    <input type="email" placeholder='Enter Your email Here' className='email' />
                    <button className='subscribe-button'>Subscribe</button>
                    <p>Get tha latest menu</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;