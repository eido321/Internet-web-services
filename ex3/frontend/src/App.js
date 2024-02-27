import React, {useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import FunctionsBar from './components/functionsBar/FunctionsBar';
import ScrollView from './components/scrollView/ScrollView';

function App() {
  const [getAllVisible, setGetAllVisible] = useState(true);
  const [getVisible, setGetVisible] = useState(false);
  const [createVisible, setCreateVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const [data, setData] = useState(null);
  
  return (
    <div>
      <Header />
      <FunctionsBar 
        setGetAllVisible={setGetAllVisible}
        setGetVisible={setGetVisible}
        setCreateVisible={setCreateVisible}
        setUpdateVisible={setUpdateVisible}
        setDeleteVisible={setDeleteVisible}
        setData={setData}
        setShowLoading={setShowLoading}
        setShowError={setShowError}
      />
      <ScrollView 
        getAllVisible={getAllVisible}
        getVisible={getVisible}
        createVisible={createVisible}
        updateVisible={updateVisible}
        deleteVisible={deleteVisible}
        data={data}
        setData={setData}
        showLoading={showLoading}
        setShowLoading={setShowLoading}
        showError={showError}
        setShowError={setShowError}
      />
    </div>
  );
}

export default App;
