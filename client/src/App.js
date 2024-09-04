import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { Registration } from "./Pages/Registration/Registration.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Registration />
      </div>
    </>
  );
}

export default App;
