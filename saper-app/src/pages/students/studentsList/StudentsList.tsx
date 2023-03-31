import React from 'react'
import { useTranslation } from 'react-i18next'
import { TableData } from '../../../components'
import { FaTrash } from 'react-icons/fa'
import { useAPI } from '../../../service/API'

import styles from './StudentsList.module.scss'
import { useNavigate } from 'react-router-dom'

function StudentsList() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const api = useAPI()

  const deleteItem = async (data: any): Promise<boolean> => {
    try {
      await api.delete('students/' + data.id)
      return true
    } catch (e) {
      return false
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{t('pages.student.title')}</h1>
        <button
          onClick={() => navigate('/saper/students/add')}
          className={'btn btn-sm btn-primary'}
        >
          {t('actions.add')}
        </button>
      </div>
      <TableData
        url={'/students'}
        fields={[
          { label: 'pages.student.id', type: 'text', accessor: 'id' },
          { label: 'pages.student.name', type: 'text', accessor: 'name' },
          { label: 'pages.student.login', type: 'text', accessor: 'login' },
          { label: 'pages.student.registration', type: 'text', accessor: 'registration' },
          { label: 'pages.student.paid', type: 'boolean', accessor: 'paid' },
        ]}
        filters={{}}
        actions={[
          {
            label: 'actions.delete',
            icon: <FaTrash />,
            action: deleteItem,
          },
        ]}
      />
    </div>
  )
}

export default StudentsList
