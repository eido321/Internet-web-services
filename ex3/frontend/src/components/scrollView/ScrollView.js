import React from 'react';
import './scrollView.style.css';
import Details from '../details/Details';
import Form from '../form/Form';

const ScrollView = () => {
    return (
        <div className='container'>
            <div className='scrollContainer'>
                <Form/>
                <Details id={1}/>
            </div>
        </div>
    );
};

export default ScrollView;
