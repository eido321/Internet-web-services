import React, { useState } from 'react';
import Button from '../button/Button';
import { NavContainer } from './functionsBar.style';
// eslint-disable-next-line react/prop-types
const FunctionsBar = ({ setGetAllVisible, setGetVisible, setCreateVisible, setUpdateVisible, setDeleteVisible, setData, setShowLoading, setShowError }) => {
    const [pressedButton, setPressedButton] = useState('Get All Family Reunification Forms');

    const handleButtonPress = (buttonName) => {
        setPressedButton(buttonName);
        setShowLoading(false);
        switch (buttonName) {
        case 'Get All Family Reunification Forms':
            setGetAllVisible(true);
            setGetVisible(false);
            setCreateVisible(false);
            setUpdateVisible(false);
            setDeleteVisible(false);
            setData(null);
            setShowError(false);
            break;
        case 'Get a Family Reunification Form':
            setGetAllVisible(false);
            setGetVisible(true);
            setCreateVisible(false);
            setUpdateVisible(false);
            setDeleteVisible(false);
            setData(null);
            setShowError(false);
            break;
        case 'Create a Family Reunification Form':
            setGetAllVisible(false);
            setGetVisible(false);
            setCreateVisible(true);
            setUpdateVisible(false);
            setDeleteVisible(false);
            setData(null);
            setShowError(false);
            break;
        case 'Update a Family Reunification Form':
            setGetAllVisible(false);
            setGetVisible(false);
            setCreateVisible(false);
            setUpdateVisible(true);
            setDeleteVisible(false);
            setData(null);
            setShowError(false);
            break;
        case 'Delete a Family Reunification Form':
            setGetAllVisible(false);
            setGetVisible(false);
            setCreateVisible(false);
            setUpdateVisible(false);
            setDeleteVisible(true);
            setData(null);
            setShowError(false);
            break;
        default:
            break;
        }
    };

    return (
        <NavContainer>
            <Button text={'Get All Family Reunification Forms'} onPress={() => handleButtonPress('Get All Family Reunification Forms')} pressed={pressedButton === 'Get All Family Reunification Forms'} />
            <Button text={'Get a Family Reunification Form'} onPress={() => handleButtonPress('Get a Family Reunification Form')} pressed={pressedButton === 'Get a Family Reunification Form'} />
            <Button text={'Create a Family Reunification Form'} onPress={() => handleButtonPress('Create a Family Reunification Form')} pressed={pressedButton === 'Create a Family Reunification Form'} />
            <Button text={'Update a Family Reunification Form'} onPress={() => handleButtonPress('Update a Family Reunification Form')} pressed={pressedButton === 'Update a Family Reunification Form'} />
            <Button text={'Delete a Family Reunification Form'} onPress={() => handleButtonPress('Delete a Family Reunification Form')} pressed={pressedButton === 'Delete a Family Reunification Form'} />
        </NavContainer>
    );
};

export default FunctionsBar;
