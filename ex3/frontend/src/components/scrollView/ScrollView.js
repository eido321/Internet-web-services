import React, { useState, useEffect } from 'react';
import Table from '../table/Table';
import Details from '../messageContainer/Details';
import SuccessMsg from '../messageContainer/SuccessMsg';
import Form from '../form/Form';
import loading from '../../assets/loading-spinner.gif';
import { Container, ScrollContainer, LoadingImage } from './scrollView.style';

// eslint-disable-next-line react/prop-types
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
                {/* eslint-disable-next-line react/prop-types */}
                {createVisible && data  && <SuccessMsg data={data} text={`Family reunification form of id - ${data.id} was successfully submitted`}/>}
                {updateVisible && data && <SuccessMsg data={data} text={'Family reunification form was successfully updated'}/>}
                {deleteVisible && data && <SuccessMsg data={data} text={'Family reunification form was successfully deleted'}/>}
            </ScrollContainer>
        </Container>
    );
};

export default ScrollView;
