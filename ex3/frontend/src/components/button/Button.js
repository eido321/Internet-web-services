import React from 'react';
import {StyledButton} from './button.style';

// eslint-disable-next-line react/prop-types
const Button = ({ text, onPress, pressed }) => {
    return (
        <StyledButton pressed={pressed} onClick={onPress}>
            {text}
        </StyledButton>
    );
};

export default Button;
