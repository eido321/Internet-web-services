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

const Form = ({ idInput, jsonInput, setData, type }) => {
    const [formData, setFormData] = useState({
        id: '',
        json: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (type === 'getVisible') {
                const result = await axios.get(`https://internet-web-services.onrender.com/api/familyReunificationForm/${formData.id}`);
                setData(result.data);
            }else if(type === 'createVisible'){
                console.log('formData.json: ', formData.json);
                const body = {
                    id: formData.id,
                    citizenId: formData.citizenId,
                    name: formData.name,
                    personalSituation: formData.personalSituation,
                    gender: formData.gender,
                    email: formData.email,
                    birthDate: formData.birthDate,
                    birthCountry: formData.birthCountry,
                    address: formData.address,
                    phone: formData.phone,
                    marriageCertificateImg: formData.marriageCertificateImg,
                    CriminalInformationCertificateImg: formData.CriminalInformationCertificateImg,
                    recommendationLetterImg1: formData.recommendationLetterImg1,
                    recommendationLetterImg2: formData.recommendationLetterImg2,
                    passportImg: formData.passportImg,
                    bankStatementImg: formData.bankStatementImg,
                    spousePassportImg: formData.spousePassportImg,
                    spouseBankStatementImg: formData.spouseBankStatementImg,
                    familyRecommendationLetterImg1: formData.familyRecommendationLetterImg1,
                    familyRecommendationLetterImg2: formData.familyRecommendationLetterImg2,
                    childrenPassportImg1: formData.childrenPassportImg1,
                    childrenPassportImg2: formData.childrenPassportImg2
                    // Add other fields as needed
                };
                const result = await axios.post('https://internet-web-services.onrender.com/api/familyReunificationForm', body, {
                    headers: {
                        'Content-Type': 'application/json'
                    });
                setData(result.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
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
                <ButtonContainer>
                    <Button onClick={handleSubmit}>Submit</Button>
                </ButtonContainer>
            </FormContainer>
        </FormDiv>
    );
};

export default Form;
