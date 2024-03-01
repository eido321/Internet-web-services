import styled from 'styled-components';

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

export  {FormDiv, FormTitle, FormContainer, InputContainer, InputLabel, Input, TextArea, ButtonContainer, Button};
