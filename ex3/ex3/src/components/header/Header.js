import React from 'react';
import './header.style.css';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <h1 className='title'>Family reunification forms</h1>
            <a href='https://github.com/eido321/Internet-web-services'>
            <img className='logo' src={logo} alt='GitHub Logo' />
            </a>
        </header>
    );
};

export default Header;
