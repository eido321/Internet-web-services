import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from '../table/Table';
import Details from '../messageContainer/Details';
import SuccessMsg from '../messageContainer/SuccessMsg';
import Form from '../form/Form';
import loading from '../../assets/loading-spinner.gif';

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

const LoadingImage = styled.img`
    /* Add any additional styles for the loading image here */
    width: 100px;
    height: 100px;
    margin: auto;
    display: block;
`;

const ScrollView = ({ getAllVisible, getVisible, createVisible, updateVisible, deleteVisible, data, setData, showLoading, setShowLoading, showError, setShowError}) => {
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
                <Form idInput={idInput} jsonInput={jsonInput} data={data} setData={setData} type={type} setShowLoading={setShowLoading} showError={showError} setShowError={setShowError}/>
                {showLoading && !data && <LoadingImage src={loading} alt="Loading..." />}
                {getAllVisible && data && <Table data={data}/>}
                {getVisible && data && <Details data={data}/>}
                {createVisible && data  && <SuccessMsg data={data} text={`Family reunification form of id - ${data.id} was successfully submitted`}/>}
                {updateVisible && data && <SuccessMsg data={data} text={`Family reunification form was successfully updated`}/>}
                {deleteVisible && data && <SuccessMsg data={data} text={`Family reunification form was successfully deleted`}/>}
            </ScrollContainer>
        </Container>
    );
};

export default ScrollView;
