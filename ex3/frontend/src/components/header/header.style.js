import styled from 'styled-components';

const HeaderComponent = styled.header`
    background-color: #778DA3;
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
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-top: 20px;
`;

export  {HeaderComponent, Title, Logo};
