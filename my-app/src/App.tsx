import React from 'react';
import {Badge} from "react-bootstrap";
// import logo from './logo.svg';
import Button from "./components/forms/button/Button";
import Login from "./pages/login/Login";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
          <h1>Hello World!! {' '} <Badge bg="secondary" as="button">
              New
          </Badge></h1>
          <Button onClick={() => console.log('Clicou no teste!')} text={'Teste'} />
          <button>TESTE 2</button>

          <Login />
      </>
  );
}

export default App;
