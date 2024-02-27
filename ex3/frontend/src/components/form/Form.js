import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-left: 50px;
    margin-right: 50px;
    height: 100%;
`;

const FormTitle = styled.h1`
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.5em;
    color: #778DA3;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    background-color: #ffffff;
    border: 6px solid #778DA3;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 35px;
    width: 100%;
    height: 80%;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
`;

const InputLabel = styled.label`
    font-size: 1.2em;
    color: #778DA3;
    margin-bottom: 0.5em;
`;

const Input = styled.input`
    border-radius: 5px;
    padding: 5px;
    border: 2px solid #778DA3;
    color: #778DA3;
    width: 90%;
`;

const TextArea = styled.textarea`
    border-radius: 5px;
    padding: 5px;
    border: 2px solid #778DA3;
    color: #778DA3;
    width: 90%;
    resize: none;
    overflow-y: auto;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 95%;
    margin-top: 10px;
`;

const Button = styled.button`
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border: 2px solid #778DA3;
    border-radius: 45px;
    background-color: #ffffff;
    color: #778DA3;
    cursor: pointer;
`;

const Form = ({ idInput, jsonInput, data, setData, type, setShowLoading, showError, setShowError }) => {
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
                const formDataObject = JSON.parse(formData.json); // Parse JSON string into object
                const result = await axios.post('https://internet-web-services.onrender.com/api/familyReunificationForm', formDataObject, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setData(result.data);
                setErrorMessages([]);

            } else if (type === 'updateVisible') {
                const formDataObject = JSON.parse(formData.json); // Parse JSON string into object
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
                const result = await axios.get(`https://internet-web-services.onrender.com/api/familyReunificationForm`);
                setData(result.data);
                setErrorMessages([]);

            }
        } catch (error) {
            setShowLoading(false);
            setShowError(true);
            setErrorMessages([error.response ? error.response.data : error.message]);
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
                            {errorMessages.map((error, index) => (
                                <p key={index}>{error.message}</p>
                            ))}
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
