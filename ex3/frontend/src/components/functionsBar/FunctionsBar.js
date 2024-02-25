import React from 'react';
import './functionsBar.style.css';
import Button from '../button/Button';

function FunctionsBar() {
    return (
        <div className='navContainer'>
            <Button text={'Get All Family Reunification Forms'}/>
            <Button text={'Get a Family Reunification Form'}/>
            <Button text={'Create a Family Reunification Form'}/>
            <Button text={'Update a Family Reunification Form'}/>
            <Button text={'Delete a Family Reunification Form'}/>
        </div>
    );
}

export default FunctionsBar;
