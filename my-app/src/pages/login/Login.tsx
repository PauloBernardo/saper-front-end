import React, {useState} from 'react';

import {Button, Card, Form, Row} from "react-bootstrap";

import './Login.css';

import styles from './Login.module.scss';

function Login() {
    const [style, setStyle] = useState<any>({});
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubtmit = (e: any) => {
        e.preventDefault();

        console.log(email, senha);
    }

  return (
    <Card className={'col-5 m-auto'}>
      <Card.Header>
        <h3 className={'card-title'}>Login</h3>
      </Card.Header>

      <Card.Body className={styles.body}>
          <Form onSubmit={handleSubtmit}>
              <Row>
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type={'email'} />
              </Row>
              <Row>
                  <Form.Label>Senha</Form.Label>
                  <Form.Control value={senha} onChange={(e) => setSenha(e.target.value)} type={'password'} />
              </Row>
              <Button style={style} onMouseLeave={() => setStyle({})} onMouseEnter={() => setStyle({backgroundColor: 'green'})} variant={'primary'} type={'submit'}>
                  Submit
              </Button>
          </Form>
      </Card.Body>
    </Card>
  );
}

export default Login;
