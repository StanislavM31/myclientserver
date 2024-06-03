import { useState } from "react";


export function Registration(){
    const [value, setValue] = useState({ name: "", email: "", password: "" });

  function setNewInputValue(event) {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  function sendData() {
    console.log(value);

fetch('http://localhost:3001/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json(); //json
})
.then(data => {
  console.log('Success:', data.message);
})

  setValue({ name: "", email: "", password: "" });
}


  
/*   function showme() {
    console.log(value);
    //https://habr.com/ru/companies/ruvds/articles/445276/
  } */
//https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-Git
  return (
    <div className="App">
      <header className="App-header">
       {/*  <img src={logo} className="App-logo" alt="logo" /> */}
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