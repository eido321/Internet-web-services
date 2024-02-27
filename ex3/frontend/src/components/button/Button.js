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
    border: 2px solid ${props => props.pressed ? '#ffffff' : '#778DA3'};
    border-radius: 45px;
    background-color: ${props => props.pressed ? '#778DA3' : '#ffffff'};
    color: ${props => props.pressed ? '#ffffff' : '#778DA3'};
    cursor: pointer;
    max-width: 280px;

    &:hover {
        background-color: ${props => props.pressed ? '#778DA3' : '#ffffff'};
        color: ${props => props.pressed ? '#ffffff' : '#778DA3'};
    }

    &:active {
        background-color: ${props => props.pressed ? '#778DA3' : '#ffffff'};
        color: ${props => props.pressed ? '#ffffff' : '#778DA3'};
    }
`;

const Button = ({ text, onPress, pressed }) => {
    return (
        <StyledButton pressed={pressed} onClick={onPress}>
            {text}
        </StyledButton>
    );
}

export default Button;