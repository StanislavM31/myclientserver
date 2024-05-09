import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

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
  const [value, setValue] = useState({ name: "", email: "", password: "" });

  function setNewInputValue(event) {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  function sendData() {
    console.log(value);
    setValue({ ...value, name: "", email: "", password: "" });
    console.log("value", value);
  }

  
/*   function showme() {
    console.log(value);
    //https://habr.com/ru/companies/ruvds/articles/445276/
  } */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="form">
          <input
            name="name"
            value={value.name}
            onChange={setNewInputValue}
            placeholder="name"
          ></input>
          <input
            name="email"
            value={value.email}
            onChange={setNewInputValue}
            placeholder="email"
          ></input>
          <input
            name="password"
            value={value.password}
            onChange={setNewInputValue}
            placeholder="password"
          ></input>
        </div>
        <div className="btn" onClick={sendData}>
          send
        </div>
{/*         <div className="btn" onClick={showme}>
          show
        </div> */}
      </header>
    </div>
  );
}

export default App;
