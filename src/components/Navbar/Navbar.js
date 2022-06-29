import React, { useState } from 'react';
import brandLogo from '../../images/logo-insure.svg';
import './Navbar.css';

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleIsNav = () => {
        setIsNavExpanded(!isNavExpanded)
    }


    return(
        <div className='navbar-container'>
            <div className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}>
                <ul>
                    <li><a href='#'>HOW WE WORK</a></li>
                    <li><a href='#'>BLOG</a></li>
                    <li><a href='#'>ACCOUNT</a></li>
                    <li><a href='#'>VIEW PLANS</a></li>                   
                </ul>
            </div>
            <div className='navbar-sub'>
                <div className='navbar-brand'>
                    <img src={brandLogo} alt='brand-logo'></img>
                </div>
                <div className='nav-menu-fs'>
                    <div className='nav-menu-fs-sub'>
                        <a href='#'>HOW WE WORK</a>
                        <a href='#'>BLOG</a>
                        <a href='#'>ACCOUNT</a>
                        <a href='#' id='view-plans-btn'>VIEW PLANS</a>
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