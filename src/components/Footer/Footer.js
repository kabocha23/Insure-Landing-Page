import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {


    return(
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-header'>
                    <div className='footer-header-brand'>
                        INSURE
                    </div>
                    <div className='footer-header-contacts'>
                        FB TW PI IG
                    </div>
                </div>
                <div className='footer-body'>
                    <div className='footer-body-sub'>
                        <p>OUR COMPANY</p>
                        <p>HOW WE WORK</p>
                        <p>WHY INSURE?</p>
                        <p>VIEW PLANS</p>
                        <p>REVIEWS</p>
                    </div>
                    <div className='footer-body-sub'>
                        <p>Help ME</p>
                        <p>FAQ</p>
                        <p>TERMS OF USE</p>
                        <p>PRIVACY POLICY</p>
                        <p>COOKIES</p>
                    </div>
                    <div className='footer-body-sub'>
                        <p>CONTACT</p>
                        <p>SALES</p>
                        <p>SUPPORT</p>
                        <p>LIVE CHAT</p>
                    </div>
                    <div className='footer-body-sub'>
                        <p>OTHER</p>
                        <p>CAREERS</p>
                        <p>PRESS</p>
                        <p>LICENSES</p>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Footer;