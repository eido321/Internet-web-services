import React from 'react';
import styled from 'styled-components';

const DetailsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-self: center;
    flex-direction: column;
    height: 100%;
    margin-left: 50px;
    margin-right: 50px;
    width: 50%;
`;

const DetailsTitle = styled.h1`
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.5em;
    color: #778DA3;
`;

const SuccessMsg = ({data,text}) => {
    return (
        <DetailsDiv>
            {data && (<DetailsTitle>{text}</DetailsTitle>)}
        </DetailsDiv>
    );
};

export default SuccessMsg;
