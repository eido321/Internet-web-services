import React from 'react';
import {DetailsDiv, DetailsTitle} from './details.style';

// eslint-disable-next-line react/prop-types
const SuccessMsg = ({data,text}) => {
    return (
        <DetailsDiv>
            {data && (<DetailsTitle>{text}</DetailsTitle>)}
        </DetailsDiv>
    );
};

export default SuccessMsg;
