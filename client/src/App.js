import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { Registration } from "./Pages/Registration/Registration.jsx";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const filled = useSelector(state=> state.filled);
  console.log(filled);
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
