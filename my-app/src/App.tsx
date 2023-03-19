import React from 'react';
import {Badge} from "react-bootstrap";
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ExemploPokemon from "./exemploPokemon/ExemploPokemon";

function App() {
  return (
    // <div className="ExemploPokemon">
    //   <header className="ExemploPokemon-header">
    //     <img src={logo} className="ExemploPokemon-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/ExemploPokemon.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="ExemploPokemon-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //   <h1>Hello World!! {' '} <Badge bg="secondary" as="button">
    //     New
    //   </Badge></h1>
      <ExemploPokemon />
  );
}

export default App;
