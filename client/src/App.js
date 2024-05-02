import logo from "./logo.svg";
import "./App.css";
import {useState, useEffect} from "react";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
function App() {
  const[value, setValue] = useState({name:"", email:"", password:""});

  useEffect(()=>{

  })
  function setNewInputValue(event){
    setValue({...value, [event.target.name]: event.target.value})
    setValue({...value, [event.target.email]: event.target.value})
    setValue({...value, [event.target.password]: event.target.value})
  }
  function sendData(){
    console.log(value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="form">
          <input  value="name" onChange={()=>setNewInputValue() } placeholder="name"></input>
          <input  value="email" onChange={()=>setNewInputValue() } placeholder="email"></input>
          <input  value="password" onChange={()=>setNewInputValue() } placeholder="password"></input>
        </div>
        <div className="btn" onClick={sendData}>send</div>
      </header>
    </div>
  );
}

export default App;
