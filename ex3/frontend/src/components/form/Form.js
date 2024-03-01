
import React, { useState, useEffect } from 'react';
import { FormDiv, FormTitle, FormContainer, InputContainer, InputLabel, Input, TextArea, ButtonContainer, Button } from './form.style';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Form = ({ idInput, jsonInput, setData, type, setShowLoading, showError, setShowError }) => {
    const [formData, setFormData] = useState({
        id: '',
        json: ''
    });
    const [errorMessages, setErrorMessages] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        setShowLoading(true);
        if (e) {
            e.preventDefault();
        }
        try {
            if (type === 'getVisible') {
                const result = await axios.get(`https://internet-web-services.onrender.com/api/familyReunificationForm/${formData.id}`);
                setData(result.data);
                setErrorMessages([]);
            } else if (type === 'createVisible') {
                const formDataObject = JSON.parse(formData.json);
                const result = await axios.post('https://internet-web-services.onrender.com/api/familyReunificationForm', formDataObject, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setData(result.data);
                setErrorMessages([]);

            } else if (type === 'updateVisible') {
                const formDataObject = JSON.parse(formData.json);
                const result = await axios.put(`https://internet-web-services.onrender.com/api/familyReunificationForm/${formData.id}`, formDataObject, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setData(result.data);
                setErrorMessages([]);

            } else if (type === 'deleteVisible') {
                const result = await axios.delete(`https://internet-web-services.onrender.com/api/familyReunificationForm/${formData.id}`);
                setData(result.data);
                setErrorMessages([]);

            } else if (type === 'getAllVisible') {
                const result = await axios.get('https://internet-web-services.onrender.com/api/familyReunificationForm');
                setData(result.data);
                setErrorMessages([]);

            }
        } catch (error) {
            setShowLoading(false);
            setShowError(true);
            setErrorMessages([error.response ? error.response.data : error.message]);
            if(errorMessages.length === 0){
                setErrorMessages(error.response.data);
                console.log('here 2: ',error.response.data);
            }
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
        }
        setFormData({
            id: '',
            json: ''
        });
    };

    useEffect(() => {
        if (type === 'getAllVisible') {
            setShowLoading(true);
            handleSubmit(); // Call handleSubmit only when type is 'getAllVisible'
        }
    }, [type]);


    return (
        (idInput || jsonInput) && (
            <FormDiv>
                <FormTitle>Enter Form Details</FormTitle>
                <FormContainer>
                    {idInput && (
                        <InputContainer>
                            <InputLabel htmlFor='id'>Enter Form ID to Get Details:</InputLabel>
                            <Input type='text' id='id' name='id' value={formData.id} onChange={handleChange} />
                        </InputContainer>
                    )}
                    {jsonInput && (
                        <InputContainer>
                            <InputLabel htmlFor='json'>Enter JSON text:</InputLabel>
                            <TextArea id='json' name='json' rows='10' cols='50' value={formData.json} onChange={handleChange}></TextArea>
                        </InputContainer>
                    )}
                    {errorMessages.length > 0 && showError && (
                        <InputContainer>
                            <p>{errorMessages}</p>
                        </InputContainer>
                    )}

                    <ButtonContainer>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </ButtonContainer>
                </FormContainer>
            </FormDiv>
        )
    );

};

export default Form;
