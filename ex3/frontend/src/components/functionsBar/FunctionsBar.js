// FunctionsBar.js

import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

const NavContainer = styled.div`
    background-color: #ffffff;
    border-bottom: 2px solid #778DA3;
    margin: 0;
    padding: 10px 2% 10px 2%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const FunctionsBar = ({setGetAllVisible, setGetVisible, setCreateVisible, setUpdateVisible, setDeleteVisible, setData}) => {

    function resetAll() {
        setGetAllVisible(false);
        setGetVisible(false);
        setCreateVisible(false);
        setUpdateVisible(false);
        setDeleteVisible(false);
        
        setData(null)
    }

    return (
        <NavContainer>
            <Button text={'Get All Family Reunification Forms'} onPress={() => {resetAll(); setGetAllVisible(true);}}/>
            <Button text={'Get a Family Reunification Form'} onPress={() => {resetAll(); setGetVisible(true);}}/>
            <Button text={'Create a Family Reunification Form'} onPress={() => {resetAll(); setCreateVisible(true);}}/>
            <Button text={'Update a Family Reunification Form'} onPress={() => {resetAll(); setUpdateVisible(true);}}/>
            <Button text={'Delete a Family Reunification Form'} onPress={() => {resetAll(); setDeleteVisible(true);}}/>
        </NavContainer>
    );
};

export default FunctionsBar;
