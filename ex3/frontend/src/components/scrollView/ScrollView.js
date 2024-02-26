import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Details from '../messageContainer/Details';
import SuccessMsg from '../messageContainer/SuccessMsg';
import Form from '../form/Form';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ScrollContainer = styled.div`
    min-height: 300px;
    height: 500px;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: auto;
    padding: 10px;
    border: dashed 2px #778DA3;
    border-radius: 15px;
`;

const ScrollView = ({ getAllVisible, getVisible, createVisible, updateVisible, deleteVisible }) => {
    const [data, setData] = useState([{}]);
    const [type, setType] = useState('getVisible');
    const [idInput, setIdInput] = useState(false);
    const [jsonInput, setJsonInput] = useState(false);

    useEffect(() => {
        if (getAllVisible) {
            setType('getAllVisible');
            setIdInput(false);
            setJsonInput(false);
        } else if (getVisible) {
            setType('getVisible');
            setIdInput(true);
            setJsonInput(false);
        } else if (createVisible) {
            setType('createVisible');
            setIdInput(false);
            setJsonInput(true);
        } else if (updateVisible) {
            setType('updateVisible');
            setIdInput(true);
            setJsonInput(true);
        } else if (deleteVisible) {
            setType('deleteVisible');
            setIdInput(true);
            setJsonInput(false);
        }
    }, [getAllVisible, getVisible, createVisible, updateVisible, deleteVisible]);

    return (
        <Container>
            <ScrollContainer>
                <Form idInput={idInput} jsonInput={jsonInput} setData={setData} type={type}/>
                {getVisible && (<Details data={data}/>)}
                {createVisible && (<SuccessMsg data={data} text={`Family reunification form of id - ${idInput} was successfully submitted`}/>)}
            </ScrollContainer>
        </Container>
    );
};

export default ScrollView;
