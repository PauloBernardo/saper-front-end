import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useAPI } from '../../../service/API'
import { useNavigate } from 'react-router-dom'

type LoginData = {
  name: string
  login: string
  password: string
  repeated_password: string
}

function StudentsAdd() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [state, setState] = useState<LoginData>({
    login: '',
    password: '',
    name: '',
    repeated_password: '',
  })
  const api = useAPI()

  const onUpdate = (
    e: React.ChangeEvent<any>,
    name: 'login' | 'password' | 'repeated_password' | 'name',
  ) => {
    setState((state) => ({ ...state, [name]: e.target.value }))
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    if (state.login && state.password && state.password === state.repeated_password) {
      api.post('/students', state).then(() => {
        navigate('/saper/students')
      })
    }
  }

  return (
    <div className={'container'}>
      <Card>
        <Card.Header>
          <Card.Title>{t('pages.student.add.title')}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>{t('pages.student.add.fields.name')}</Form.Label>
              <Form.Control
                value={state.name}
                type='text'
                placeholder='Enter email'
                onChange={(e) => onUpdate(e, 'name')}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>{t('pages.student.add.fields.login')}</Form.Label>
              <Form.Control
                value={state.login}
                type='email'
                placeholder='Enter email'
                onChange={(e) => onUpdate(e, 'login')}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>{t('pages.student.add.fields.password')}</Form.Label>
              <Form.Control
                value={state.password}
                type='password'
                placeholder='Password'
                onChange={(e) => onUpdate(e, 'password')}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>{t('pages.student.add.fields.repeat_password')}</Form.Label>
              <Form.Control
                value={state.repeated_password}
                type='password'
                placeholder='Password'
                onChange={(e) => onUpdate(e, 'repeated_password')}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              {t('actions.add')}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default StudentsAdd
