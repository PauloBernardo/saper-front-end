import React from 'react';
import {Badge} from "react-bootstrap";
// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/forms/button/Button";
import Login from "./pages/login/Login";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/Login.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <>
          <h1>Hello World!! {' '} <Badge bg="secondary" as="button">
              New
          </Badge></h1>
          <Button text={'Teste'} />
          <button>TESTE 2</button>

          <Login />
      </>
  );
}

export default App;
