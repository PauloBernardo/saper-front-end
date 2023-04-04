import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'

import { TableData } from 'components'
import { useAPI } from 'service/API'
import { TableDataInstance } from 'components/tableData/TableData'

import styles from './TeamsList.module.scss'

function TeamsList() {
    const [itemSelected, setItemSelected] = useState<any>()
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
    const navigate = useNavigate()
    const { t } = useTranslation()
    const api = useAPI()
    const table = useRef<TableDataInstance>()

    const handleDeleteItem = async () => {
        await api.delete('/teams/' + itemSelected.id)
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
                <h1>{t('pages.team.title')}</h1>
            </div>
            <TableData
                reference={table}
                url={'/teams'}
                fields={[
                    { label: 'pages.team.id', type: 'text', accessor: 'id' },
                    { label: 'pages.team.box', type: 'text', accessor: 'boxName' },
                    { label: 'pages.team.professor', type: 'text', accessor: 'professorName' },
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

export default TeamsList
