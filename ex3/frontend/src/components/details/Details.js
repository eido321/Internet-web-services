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

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    background-color: #778DA3;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 35px;
    width: 100%;
    height: 80%;
    border: 6px solid #778DA3;
`;

const UnorderedList = styled.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: 35px;
`;

const ListItem = styled.li`
    margin-bottom: 0.5em;
    font-size: 1.2em;
    color: #ffffff;
`;

const Details = ({data}) => {
    console.log('data: ' ,data);
    return (
        <DetailsDiv>
            <DetailsTitle>Family reunification form of id - </DetailsTitle>
            <DetailsContainer>
                <UnorderedList>
                    <ListItem>Name - </ListItem>
                    <ListItem>Personal Situation - </ListItem>
                    <ListItem>Email - </ListItem>
                    <ListItem>Gender - </ListItem>
                    <ListItem>Birth Date - </ListItem>
                    <ListItem>Birth Place - </ListItem>
                    <ListItem>Phone - </ListItem>
                </UnorderedList>
            </DetailsContainer>
        </DetailsDiv>
    );
};

export default Details;
