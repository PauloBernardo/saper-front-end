import React from 'react';

import {Card} from "react-bootstrap";

import './Login.css';
import styles from './Login.module.scss';

function Login() {
  return (
    <Card className={'col-5 m-auto'}>
      <Card.Header>
        <h3 className={'card-title'}>Login</h3>
      </Card.Header>

      <Card.Body className={styles.body}>
        <p>
          Faça seu login aqui!!
        </p>

      </Card.Body>
    </Card>
  );
}

export default Login;
