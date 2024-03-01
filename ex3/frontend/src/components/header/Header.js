import React from 'react';
import { HeaderComponent, Title, Logo } from './header.style';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <HeaderComponent>
            <Title>Family reunification forms</Title>
            <a href='https://github.com/eido321/Internet-web-services'>
                <Logo src={logo} alt='GitHub Logo' />
            </a>
        </HeaderComponent>
    );
};

export default Header;
