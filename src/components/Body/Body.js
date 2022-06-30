import React, { useState } from 'react';
import familyImg from '../../images/image-intro-desktop.jpg'
import boltIcon from '../../images/icon-snappy-process.svg'
import cashIcon from '../../images/icon-affordable-prices.svg'
import personIcon from '../../images/icon-people-first.svg'
import './Body.css';

const Body = () => {


    return(
        <div className='body-container'>
            {/* intro section 'humanizing' text and photo of family */}
            <div className='body-intro'>
                <div className='body-intro-sub'>
                    <div className='body-intro-text'>
                        <hr></hr>
                        <h1>Humanizing your insurance.</h1>
                        <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                        <a href='#' id='view-plans-btn2'><span>VIEW PLANS</span></a>
                    </div>
                    <div className='body-intro-img'>
                        <img src={familyImg}></img>
                    </div>                    
                </div>
            </div>
            {/* selling point section */}
            <div className='body-different'>
                <hr></hr>
                <h1>We're different</h1>
                <div className='body-different-sub'>
                    <div className='body-different-pros'>
                        <img src={boltIcon}></img>
                        <h2>Snappy Process</h2>
                        <p>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
                    </div>
                    <div className='body-different-pros'>
                        <img src={cashIcon}></img>
                        <h2>Affordable Prices</h2>
                        <p>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                    </div>
                    <div className='body-different-pros'>
                        <img src={personIcon}></img>
                        <h2>People First</h2>
                        <p>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
                    </div>
                </div>
            </div>
            {/* find out more section  */}
            <div className='body-find-out'>
                <div className='body-find-out-text'>
                    <p>Find out more about how we work</p>
                </div>
                <div className='body-find-out-btn'>
                    <a href='#'><span>HOW WE WORK</span></a>
                </div>
            </div>
        </div>
    )

};

export default Body;