import { useState, useEffect } from 'react';
import axios from 'axios';


// -- COMPONENTS --
import {CustomButton} from './components/custombutton';
import {CustomLabel} from './components/customlabel';
import { CustomInput } from './components/custominput';


// -- CSS FILES -- 
import './App.css';
import './index.css';

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
        <br /><br /><br /><br /><br /><br />

        {/* -- CRUD -- */}
        <CRUD />
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
      <CustomButton value={"get"} onClick={handleButtonClick}>Get Data</CustomButton>
      <CustomButton onClick={clearData}>Clear Data</CustomButton>
      <br /><br />
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}

function CRUD(){

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  // -- [ (C) Submit Button Function ] --
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, age, message);
    if (name === "") { alert("Please enter a name"); return; };

    var url = "http://localhost:3000/user/";

    // Create JSON object
    const data = {
      name: name,
      age: age,
      message: message
    }

    // POST data
    axios.post(url, data)
      .then((response) => {
        console.log(response);
        setResponse(response.data);
      }
    );

    // Clear form
    setName("");
    setAge("");
    setMessage("");
  }

  // -- [ (R) Read Button Function ] --
  const handleRead = (event) => {
    event.preventDefault();
    var url = "http://localhost:3000/user/";
    if (name != "") url = url + name;

    axios.get(url)
      .then((response) => {
        console.log(response);
        setResponse(response.data);
      }
    );
  }

  // -- [ (U) Update Button Function ] --
  const handleUpdate = (event) => {
    event.preventDefault();
    var url = "http://localhost:3000/user/";
    if (name != "") url = url + name;

    const obj = {
      name: name,
      age: age,
      message: message
    }
    
    axios.patch(url, obj)
      .then((response) => {
        console.log(response);
        setResponse(response.data);
      });
  }

  // -- [ (D) Delete Button Function ] --
  const handleDelete = (event) => {
    event.preventDefault();
    var url = "http://localhost:3000/user/";
    if (name === "") { alert("Please enter a name"); return; };
    
    url = url + name;
    axios.delete(url)
      .then((response) => {
        console.log(response);
        setResponse(response.data);
    });
  }
    


  return (
    <div className='container'>
      <div className='left'>
        <form>
          <div className="form-input">
            <CustomLabel type="text" name="name"> Name: </CustomLabel>
            <CustomInput type="text" name="name" onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="form-input">
            <CustomLabel type="text" name="age"> Age: </CustomLabel>
            <CustomInput type="text" name="age" onChange={(e) => setAge(e.target.value)}/>
          </div>

          <div className="form-input">
            <CustomLabel type="text" name="message"> Message: </CustomLabel>
            <CustomInput type="text" name="message" onChange={(e) => setMessage(e.target.value)}/>
          </div>

          {/* Submit form */}
          <br/>
          <div className='form-submit'>
            <CustomButton onClick={handleSubmit}>Create</CustomButton>
            <CustomButton onClick={handleRead}>Read</CustomButton>
            <CustomButton onClick={handleUpdate}>Update</CustomButton>
            <CustomButton onClick={handleDelete}>Delete</CustomButton>
          </div>
        </form>
      </div>
      <div className='right'>
        <p>Response:</p>
        <code>
          {JSON.stringify(response)}
        </code>
      </div>
    </div>
  )
  }

export default App;
