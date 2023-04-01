import React, {useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useAPI } from '../../../service/API'
import { AuthContext } from '../../../store/authContext'

import Philips from '../../../assets/img/philips.png'

type StudentData = {
  file?: any
  name: string
  paid: boolean
}

function StudentsEdit() {
  const { id } = useParams();
  const auth = useContext(AuthContext)
  const [state, setState] = useState<StudentData>({
    name: '',
    paid: false,
  })
  const api = useAPI()
  const navigate = useNavigate()
  const [profileImage, setProfileImage] = useState<any>(Philips)

  useEffect(() => {
    api.get('/students/' + id, {}).then((res) => {
      setState({name: res.name, paid: res.paid})
      setProfileImage(process.env.REACT_APP_BACK_HOST + '/files/' + res.profileImage.id)
    })
  }, [id]);

  const updateState = (e: any, field: string) => {
    setState((state) => ({ ...state, [field]: e.target.value }))
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setProfileImage(reader.result)
    }

    if (file) {
      setState((state) => ({ ...state, file }))
      reader.readAsDataURL(file)
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    const htmlConfig = {
      headers: {
        'Content-Type': 'multipart/form-data;',
        'Access-Control-Allow-Origin': '*',
        Authorization: auth.user?.basicAuth,
      },
    }

    const formData = new FormData()
    formData.append('file', state.file)
    formData.append('name', state.name)
    formData.append('paid', String(state.paid))

    api.put('/students', formData, htmlConfig).then(() => {
      navigate('/saper/students')
    })
  }

  return (
    <div>
      <h1>Edição Estudantes</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <img
            src={profileImage}
            width={75}
            height={75}
            className={'rounded-circle'}
            alt={'profileImage'}
          />
          <Form.Label>Imagem de Perfil</Form.Label>
          <input
            type='file'
            className={'form-control'}
            accept={'image/*'}
            onChange={(e) => handleImageChange(e)}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Nome</Form.Label>
          <Form.Control value={state.name} type='text' onChange={(e) => updateState(e, 'name')} />
        </Form.Group>
        <Form.Check className='mb-3'>
          <Form.Check.Input
            checked={state.paid}
            onChange={(e) => setState((state) => ({ ...state, paid: e.target.checked }))}
          />
          <Form.Label>Pago</Form.Label>
        </Form.Check>
        <Button variant='primary' type='submit'>
          Editar
        </Button>
      </Form>
    </div>
  )
}

export default StudentsEdit
