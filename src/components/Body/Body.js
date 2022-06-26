import React, { useState } from 'react';
import familyImg from '../../images/image-intro-desktop.jpg'
import boltIcon from '../../images/icon-snappy-process.svg'
import cashIcon from '../../images/icon-affordable-prices.svg'
import personIcon from '../../images/icon-people-first.svg'
import './Body.css';

const Body = () => {


    return(
        <div className='body-container'>
            <div className='body-intro'>
                <div className='body-intro-sub'>
                    <div className='body-intro-text'>
                        <h1>Humanizing your insurance.</h1>
                        <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                    </div>
                    <div className='body-intro-img'>
                        <img src={familyImg}></img>
                    </div>                    
                </div>
            </div>
            <div className='body-different'>
                <h1>We're different</h1>
                <div className='body-different-sub'>
                    <div className='body-different-pros'>
                        <img src={boltIcon}></img>
                        <h2>Snappy Process</h2>
                        <p></p>
                    </div>
                    <div className='body-different-pros'>
                        <img src={cashIcon}></img>
                        <h2>Affordable Prices</h2>
                        <p></p>
                    </div>
                    <div className='body-different-pros'>
                        <img src={personIcon}></img>
                        <h2>People First</h2>
                        <p></p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='body-find-out'>

            </div>
        </div>
    )

};

export default Body;