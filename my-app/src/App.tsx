import React from 'react';
// import {Badge} from "react-bootstrap";
// // import logo from './logo.svg';
import {Welcome, WelcomeClass} from "./components/welcome/Welcome";
import {Lista, ListaClass} from "./components/lista/Lista";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import ExemploPokemon from "./exemploPokemon/ExemploPokemon";
// import Button from "./components/forms/button/Button";
// import Login from "./pages/login/Login";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
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
          {/*<h1>Hello World!! {' '} <Badge bg="secondary" as="button">*/}
          {/*    New*/}
          {/*</Badge></h1>*/}
          {/*<Button text={'Teste'} />*/}
          {/*<button>TESTE 2</button>*/}

          {/*<Login />*/}
          {/*<ExemploPokemon />*/}
          <Welcome />
          <WelcomeClass />

          <Lista />
          <ListaClass />
      </>
  );
}

export default App;
