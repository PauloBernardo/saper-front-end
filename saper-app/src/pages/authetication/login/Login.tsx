import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import {Button, Card, Form} from "react-bootstrap";
import {useAPI} from "../../../service/API";


type LoginForm = {
  user: string;
  password: string;
}

function Login() {
  const api = useAPI();
  const [state, setState] = useState<LoginForm>({user: '', password: ''});
  const { t } = useTranslation()

  const updateState = (field: string, e: any) => {
    setState((state) => ({...state, [field]: e.target.value}))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const basicAuth = 'Basic ' + btoa(state.user +  ':' + state.password);
    const htmlConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Acess-Control-Allow-Origin': '*',
        Authorization: basicAuth,
      }
    }

    api.get('my/client', {}, htmlConfig).then((res) => {
      console.log("Sucesso!", res);
    }).catch((e) => {
      console.log("Erro!", e);
    })
  }

  return (
    <Card className={'col-4 m-auto'}>
      <Card.Header>
        <Card.Title>{t('auth.login.title')}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t('auth.login.user')}</Form.Label>
            <Form.Control type="text" placeholder="" value={state.user} onChange={(e) => updateState('user', e)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{t('auth.login.password')}</Form.Label>
            <Form.Control type="password" placeholder="Password" value={state.password} onChange={(e) => updateState('password', e)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            {t('auth.login.enter')}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Login
