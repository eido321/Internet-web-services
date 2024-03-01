import styled from 'styled-components';

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

export { Container, ScrollContainer, LoadingImage };
