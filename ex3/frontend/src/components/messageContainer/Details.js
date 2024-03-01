import React from 'react';
import {DetailsDiv, DetailsTitle, DetailsContainer, UnorderedList, ListItem} from './details.style';

// eslint-disable-next-line react/prop-types
const Details = ({data}) => {
    console.log('data: ' ,data);
    return (
        <DetailsDiv>
            {/* eslint-disable-next-line react/prop-types */}
            <DetailsTitle>Family reunification form of id - {data['id']}</DetailsTitle>
            <DetailsContainer>
                <UnorderedList>
                    {/* eslint-disable-next-line react/prop-types */}
                    <ListItem>Name - {data['name']}</ListItem>
                    {/* eslint-disable-next-line react/prop-types */}
                    <ListItem>Personal Situation - {data['personalSituation']}</ListItem>
                    {/* eslint-disable-next-line react/prop-types */}
                    <ListItem>Email - {data['email']}</ListItem>
                    {/* eslint-disable-next-line react/prop-types */}
                    <ListItem>Gender - {data['gender']}</ListItem>
                    {/* eslint-disable-next-line react/prop-types */}
                    <ListItem>Birth Date - {data['birthDate']}</ListItem>
                    {/* eslint-disable-next-line react/prop-types */}
                    <ListItem>Birth Place - {data['birthCountry']}</ListItem>
                    {/* eslint-disable-next-line react/prop-types */}
                    <ListItem>Phone - {data['phone']}</ListItem>
                </UnorderedList>
            </DetailsContainer>
        </DetailsDiv>
    );
};

export default Details;
