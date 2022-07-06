import React, { useState } from 'react';
import FbIcon from '../../images/icon-facebook.svg'
import TwIcon from '../../images/icon-twitter.svg'
import PiIcon from '../../images/icon-pinterest.svg'
import IgIcon from '../../images/icon-instagram.svg'
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
                        <img src={FbIcon} alt='facebook-icon'/>
                        <img src={TwIcon} alt='twitter-icon'/>
                        <img src={PiIcon} alt='pinterest-icon'/>
                        <img src={IgIcon} alt='instagram-icon'/>
                    </div>
                </div>
                <hr></hr>
                <div className='footer-body'>
                    <div className='footer-body-sub'>
                        <ul>
                            <li><a href='#'>OUR COMPANY</a></li>
                            <li><a href='#'>HOW WE WORK</a></li>
                            <li><a href='#'>WHY INSURE?</a></li>
                            <li><a href='#'>VIEW PLANS</a></li>
                            <li><a href='#'>REVIEWS</a> </li>                           
                        </ul>
                    </div>
                    <div className='footer-body-sub'>
                        <ul>
                            <li><a href='#'>HELP ME</a></li>
                            <li><a href='#'>FAQ</a></li>
                            <li><a href='#'>TERMS OF USE</a></li>
                            <li><a href='#'>PRIVACY POLICY</a></li>
                            <li><a href='#'>COOKIES</a> </li>                           
                        </ul>
                    </div>
                    <div className='footer-body-sub'>
                        <ul>
                            <li><a href='#'>CONTACT</a></li>
                            <li><a href='#'>SALES</a></li>
                            <li><a href='#'>SUPPORT</a></li>
                            <li><a href='#'>LIVE CHAT</a></li>                         
                        </ul>
                    </div>
                    <div className='footer-body-sub'>
                        <ul>
                            <li><a href='#'>OTHER</a></li>
                            <li><a href='#'>CAREERS</a></li>
                            <li><a href='#'>PRESS</a></li>
                            <li><a href='#'>LICENSES</a></li>                         
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Footer;