import React, { useState } from 'react';
import brandLogo from '../../images/logo-insure.svg';
import './Navbar.css';

const Navbar = ({toggleIsNav, isNavExpanded}) => {



    return(
        <div className='navbar-container'>
            <div className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}>
                <ul>
                    <li><a>HOW WE WORK</a></li>
                    <li><a>BLOG</a></li>
                    <li><a>ACCOUNT</a></li>
                    <li><a id='view-plans-btn'>VIEW PLANS</a></li>                   
                </ul>
            </div>
            <div className='navbar-sub'>
                <div className='navbar-brand'>
                    <img src={brandLogo} alt='brand-logo'></img>
                </div>
                <div className='nav-menu-fs'>
                    <div className='nav-menu-fs-sub'>
                        <a>HOW WE WORK</a>
                        <a>BLOG</a>
                        <a>ACCOUNT</a>
                        <a id='view-plans-btn'><span>VIEW PLANS</span></a>
                    </div>                
                </div>
                <div className='toggle-button'>
                    <button onClick={toggleIsNav}>
                        {isNavExpanded == true ?
                            'X' :
                            '☰'
                        }
                    </button>
                </div>
            </div>
        </div>
    )

};

export default Navbar;