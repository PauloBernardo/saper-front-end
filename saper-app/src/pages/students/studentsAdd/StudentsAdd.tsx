import React, { useContext, useRef, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useAPI } from 'service/API'
import { useNavigate } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { AuthContext } from 'store/authContext'

import PhilipsImage from 'assets/img/philips.png'

import styles from './StudentsAdd.module.scss'

type StudentData = {
  file?: any
  name: string
  login: string
  paid: boolean
  password: string
  repeated_password: string
}

function StudentsAdd() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [state, setState] = useState<StudentData>({
    login: '',
    password: '',
    paid: false,
    name: '',
    repeated_password: '',
  })
  const auth = useContext(AuthContext)
  const api = useAPI()
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [imageProfile, setImageProfile] = useState<any>(PhilipsImage)

  const onUpdate = (
    e: React.ChangeEvent<any>,
    name: 'login' | 'password' | 'repeated_password' | 'name',
  ) => {
    setState((state) => ({ ...state, [name]: e.target.value }))
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    if (state.login && state.password && state.password === state.repeated_password) {
      const bodyFormData = new FormData()
      bodyFormData.append('file', state.file)
      bodyFormData.append('name', state.name)
      bodyFormData.append('paid', String(state.paid))
      bodyFormData.append('login', state.login)
      bodyFormData.append('password', state.password)
      bodyFormData.append('repeated_password', state.repeated_password)

      const httpConfig = {
        headers: {
          Authorization: auth.user?.basicAuth,
          'Content-Type': `multipart/form-data;`,
        },
      }

      api.post('/students', state, httpConfig).then(() => {
        navigate('/students')
      })
    }
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = function () {
      setImageProfile(reader.result)
    }

    if (file) {
      setState((state) => ({ ...state, file }))
      reader.readAsDataURL(file)
    } else {
      setImageProfile(PhilipsImage)
    }
  }

  return (
    <div className={'container'}>
      <Card className={'col-lg-4 col-12 m-auto'}>
        <Card.Header>
          <Card.Title>{t('pages.student.add.title')}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className={'mb-3'}>
              <div onClick={() => imageInputRef.current?.click()} className={styles.imageContainer}>
                <img
                  src={imageProfile}
                  alt='profile image'
                  width='80'
                  height='75'
                  className='rounded-circle me-2'
                />
                <FaPlus className={styles.plusButton} />
                <input
                  onChange={(e) => handleImageChange(e)}
                  ref={imageInputRef}
                  style={{ display: 'none' }}
                  type={'file'}
                  accept={'image/png, image/jpg'}
                />
              </div>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicName'>
              <Form.Label>{t('pages.student.add.fields.name')}</Form.Label>
              <Form.Control
                value={state.name}
                type='text'
                placeholder={t('pages.student.add.fields.name') as any}
                onChange={(e) => onUpdate(e, 'name')}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicLogin'>
              <Form.Label>{t('pages.student.add.fields.login')}</Form.Label>
              <Form.Control
                value={state.login}
                type='email'
                placeholder={t('pages.student.add.fields.login') as any}
                onChange={(e) => onUpdate(e, 'login')}
              />
            </Form.Group>
            <Form.Check className='mb-3'>
              <Form.Check.Input
                checked={state.paid}
                onChange={(e) => setState((state) => ({ ...state, paid: e.target.checked }))}
              />
              <Form.Check.Label>{t('pages.student.add.fields.paid')}</Form.Check.Label>
            </Form.Check>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>{t('pages.student.add.fields.password')}</Form.Label>
              <Form.Control
                value={state.password}
                type='password'
                placeholder='Password'
                onChange={(e) => onUpdate(e, 'password')}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicRepeatedPassword'>
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
