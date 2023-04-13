import React, {useContext, useEffect, useRef, useState} from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useAPI } from 'service/API'
import {useNavigate, useParams} from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { AuthContext } from 'store/authContext'

import styles from './StudentsEdit.module.scss'

type StudentData = {
  file?: any
  name: string
  paid: boolean
}

function StudentsEdit() {
  const {id} = useParams();
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [state, setState] = useState<StudentData>({
    paid: false,
    name: '',
  })
  const auth = useContext(AuthContext)
  const api = useAPI()
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [imageProfile, setImageProfile] = useState<any>()

  useEffect(() => {
    api.get('/students/' + id, {}).then((res) => {
      console.log(res);
      setState({name: res.name, paid: res.paid})
      setImageProfile(process.env.REACT_APP_BACK_HOST + '/files/' + res?.profileImage.id)
    })
  }, [id]);

  const onUpdate = (
    e: React.ChangeEvent<any>,
    name: 'login' | 'password' | 'repeated_password' | 'name',
  ) => {
    setState((state) => ({ ...state, [name]: e.target.value }))
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    if (state.name) {
      const bodyFormData = new FormData()
      if (state.file) bodyFormData.append('file', state.file);
      bodyFormData.append('name', state.name)
      bodyFormData.append('paid', String(state.paid))

      const httpConfig = {
        headers: {
          Authorization: auth.user?.basicAuth,
          'Content-Type': `multipart/form-data;`,
        },
      }

      api.put('/students/' + id, state, httpConfig).then(() => {
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
    }
  }

  return (
    <div className={'container'}>
      <Card className={'col-lg-4 col-12 m-auto'}>
        <Card.Header>
          <Card.Title>{t('pages.student.edit.title')}</Card.Title>
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
            <Form.Check className='mb-3'>
              <Form.Check.Input
                checked={state.paid}
                onChange={(e) => setState((state) => ({ ...state, paid: e.target.checked }))}
              />
              <Form.Check.Label>{t('pages.student.add.fields.paid')}</Form.Check.Label>
            </Form.Check>
            <Button variant='primary' type='submit'>
              {t('actions.edit')}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default StudentsEdit
