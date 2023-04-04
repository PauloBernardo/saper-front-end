import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'

import { TableData } from 'components'
import { useAPI } from 'service/API'
import { TableDataInstance } from 'components/tableData/TableData'

import styles from './StudentsList.module.scss'

function StudentsList() {
  const [itemSelected, setItemSelected] = useState<any>()
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const api = useAPI()
  const table = useRef<TableDataInstance>()

  const handleDeleteItem = async () => {
    await api.delete('/students/' + itemSelected.id)
    table.current?.reload()
    handleClose()
  }

  const deleteItem = async (data: any) => {
    setItemSelected(data)
    setShowDeleteModal(true)
    return false
  }

  async function editItem(data: any) {
    navigate('edit/' + data.id)
    return false
  }

  function handleClose() {
    setShowDeleteModal(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{t('pages.student.title')}</h1>
        <button onClick={() => navigate('add')} className={'btn btn-sm btn-primary'}>
          {t('actions.add')}
        </button>
      </div>

      <TableData
        reference={table}
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
          {
            label: 'actions.edit',
            icon: <FaEdit />,
            action: editItem,
          },
        ]}
      />

      <Modal show={showDeleteModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t('dialogs.remove.title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t('dialogs.remove.message')}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            {t('actions.cancel')}
          </Button>
          <Button variant='primary' onClick={handleDeleteItem}>
            {t('actions.delete')}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default StudentsList
