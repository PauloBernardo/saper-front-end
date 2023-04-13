import React, { useContext } from 'react'
import { FaCogs } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

import { AuthContext } from 'store/authContext'

import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'

function NotFound() {
  const auth = useContext(AuthContext)
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <FaCogs size={60} />
        <h1>{t('pages.notFound.title')}</h1>
        <p>{t('pages.notFound.message')}</p>
        {auth.user ? (
          <Link className={styles.link} to={'/home'}>{t('pages.notFound.home')} </Link>
        ) : (
          <Link className={styles.link} to={''}>{t('pages.notFound.home')} </Link>
        )}
      </div>
    </div>
  )
}

export default NotFound
