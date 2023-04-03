import React, {useContext, useState} from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import { useTranslation } from 'react-i18next'

import { useAPI } from 'service/API'
import {AuthContext} from "store/authContext";

type LoginData = {
  email: string
  password: string
}

function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation()
  const [state, setState] = useState<LoginData>({ email: '', password: '' })
  const api = useAPI()

  const onUpdate = (e: React.ChangeEvent<any>, name: 'email' | 'password') => {
    setState((state) => ({ ...state, [name]: e.target.value }))
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    if (state.email && state.password) {
      const basicAuth = 'Basic ' + btoa(state.email + ':' + state.password)
      const htmlConfig = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: basicAuth,
        },
      }

      api.get('/my/client', {}, htmlConfig).then((res) => {
          auth.updateUser ? auth.updateUser({...res, basicAuth}) : null;
          navigate('/home');
      })
    }
  }

  return (
    <div className={'container'}>
      <Card>
        <Card.Header>
          <Card.Title>{t('auth.login.title')}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>{t('auth.login.email')}</Form.Label>
              <Form.Control
                value={state.email}
                type='text'
                placeholder='Enter email'
                onChange={(e) => onUpdate(e, 'email')}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>{t('auth.login.password')}</Form.Label>
              <Form.Control
                value={state.password}
                type='password'
                placeholder='Password'
                onChange={(e) => onUpdate(e, 'password')}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              {t('auth.login.enter')}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login
