import React from 'react'
import { TableData } from '../../../components'
import { useNavigate } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useAPI } from '../../../service/API'

function StudentsList() {
  const api = useAPI()
  const navigate = useNavigate()

  async function handleEdit(item: any): Promise<boolean> {
    navigate('edit/' + item.id)
    return false
  }

  async function handleDelete(item: any) {
    try {
      await api.delete('/students/' + item.id)
      return true
    } catch (e) {
      return false
    }
  }

  return (
    <div>
      <h1>Lista de estudantes</h1>
      <button onClick={() => navigate('add')} className={'btn btn-primary btn-sm'}>
        Criar
      </button>

      <TableData
        url={'/students'}
        query={{}}
        fields={[
          {
            label: 'Nome',
            accessor: 'name',
            type: 'text',
          },
          {
            label: 'Matricula',
            accessor: 'registration',
            type: 'text',
          },
          {
            label: 'Login',
            accessor: 'login',
            type: 'text',
          },
          {
            label: 'Pago?',
            accessor: 'paid',
            type: 'boolean',
          },
        ]}
        actions={[
          {
            label: 'Edição',
            icon: <FaEdit />,
            action: handleEdit,
          },
          {
            label: 'Deletar',
            icon: <FaTrash />,
            action: handleDelete,
          },
        ]}
      />
    </div>
  )
}

export default StudentsList
