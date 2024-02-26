import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const HeaderComponent = styled.header`
    background-color: #778DA3;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
`;

const Title = styled.h1`
    font-size: 42px;
    font-weight: bold;
    color: #ffffff;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 20px;
`;

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
