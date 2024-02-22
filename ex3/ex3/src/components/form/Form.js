import React from 'react';
import './form.style.css';

const Form = () => {
    return (
        <div className='formDiv'>
            <h1 className='formTitle'>Enter Form Details</h1>
            <div className='formContainer'>
                <div className='inputContainer'>
                    <label htmlFor='id' className='inputLables'>Enter Form ID to Get Details:</label>
                    <input type='text' id='id' name='id' />
                </div>
                <div className='inputContainer'>
                    <label htmlFor='json' className='inputLables'>Enter JSON text:</label>
                    <textarea id='json' name='json' rows='10' cols='50'></textarea>
                </div>
                <div className='buttonContainer'>
                    <button className='button'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Form;
