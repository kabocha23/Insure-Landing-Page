import React, { useState } from 'react';
import brandLogo from '../../images/logo-insure.svg';
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
                        <img src={brandLogo} alt='footer-brand-logo'/>
                    </div>
                    <div className='footer-header-contacts'>
                        <a><img src={FbIcon} alt='facebook-icon'/></a>
                        <a><img src={TwIcon} alt='twitter-icon'/></a>
                        <a><img src={PiIcon} alt='pinterest-icon'/></a>
                        <a><img src={IgIcon} alt='instagram-icon'/></a>
                    </div>
                </div>
                <hr></hr>
                <div className='footer-body'>
                    <div className='footer-body-sub'>
                        <ul>
                            <li className='foot-sub-head'><a>OUR COMPANY</a></li>
                            <li><a>HOW WE WORK</a></li>
                            <li><a>WHY INSURE?</a></li>
                            <li><a>VIEW PLANS</a></li>
                            <li><a>REVIEWS</a> </li>                           
                        </ul>
                    </div>
                    <div className='footer-body-sub'>
                        <ul>
                            <li className='foot-sub-head'><a>HELP ME</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>TERMS OF USE</a></li>
                            <li><a>PRIVACY POLICY</a></li>
                            <li><a>COOKIES</a> </li>                           
                        </ul>
                    </div>
                    <div className='footer-body-sub'>
                        <ul>
                            <li className='foot-sub-head'><a>CONTACT</a></li>
                            <li><a>SALES</a></li>
                            <li><a>SUPPORT</a></li>
                            <li><a>LIVE CHAT</a></li>                         
                        </ul>
                    </div>
                    <div className='footer-body-sub'>
                        <ul>
                            <li className='foot-sub-head'><a>OTHER</a></li>
                            <li><a>CAREERS</a></li>
                            <li><a>PRESS</a></li>
                            <li><a>LICENSES</a></li>                         
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Footer;