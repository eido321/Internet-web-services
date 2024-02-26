// Button.js

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border: 2px solid #778DA3;
    border-radius: 45px;
    background-color: #ffffff;
    color: #778DA3;
    cursor: pointer;
    max-width: 280px;

    &:hover {
        background-color: #778DA3;
        color: #ffffff;
    }

    &:active {
        background-color: #778DA3;
        color: #ffffff;
    }
`;

const Button = ({text, onPress}) => {
    return (
        <StyledButton onClick={onPress}>
            {text}
        </StyledButton>
    );
}

export default Button;
