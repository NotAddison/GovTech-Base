import './App.css';
import './index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const user = {
  name: 'Addison Chua',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function App() {
  return (
    <div>
        {/* -- Testing components -- */}
        <Thingy />

        {/* -- Testing props -- */}
        <Data />
        <DataParam text="Passing a value via params" />
        <br />

        {/* -- Testing conditional rendering -- */}
        <ConditionalComponent />
        <br />

        {/* HTTP Reqs */}
        {/* Uses Axios Lib*/}
        <HttpReq />

    </div>
  );
}

function Thingy(){
  return (
    <div>
      <h1>React Thinngy (Syntax) Test</h1>
    </div>
  )
}

function Data(){
  return (
    <div><p><b>Name: </b>{user.name}</p></div>
  )
}

function DataParam(param){
  return (
    <div><p><b>Param text: </b>{param.text}</p></div>
  )
}

function InvertCondition({ condition, onClick }) {
  return (
    <div>
      <button onClick={onClick}>Invert Condition: {condition.toString()}</button>
    </div>
  );
}

function ConditionalComponent() {
  const [condition, setCondition] = useState(false);

  function handleConditionClick() {
    setCondition(!condition);
  }

  // useEffects
  useEffect(() => {
    document.title = `Condition is ${condition ? 'TRUE' : 'FALSE'} | ${user.name}`;
    console.log(`Condition is ${condition}`);
  }, [condition]);


  return (
    <div>
      <InvertCondition condition={condition} onClick={handleConditionClick} />
      {/* NOTE: To share data between the diff components, we need to move the state up to the parent component. */}

      <p>Condition is <span className={`${condition ? 'isTrue' : 'isFalse'}`}> <b>{condition ? 'TRUE' : 'FALSE'}</b></span></p>
      {condition && <div><code>Hello World</code> <br/><br/><br/><br/></div>}
      
    </div>
  );
}

function HttpReq(){
  const [data, setData] = useState("-- NO DATA --");

  function handleButtonClick() {
    axios.get('https://jsonplaceholder.typicode.com/photos/1')
      .then((response) => {
        setData(response.data);
      });
  }

  function clearData() {
    setData("-- NO DATA --");
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Get Data</button> 
      <button onClick={clearData}>Clear Data</button>
      <br /><br />
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}


export default App;
