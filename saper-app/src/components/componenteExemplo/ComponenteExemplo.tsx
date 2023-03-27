import React from 'react'
import styles from './ComponenteExemplo.module.scss'
import { ComponenteExemploProps } from './types'
import { useTranslation } from 'react-i18next'

function ComponenteExemplo({ message }: ComponenteExemploProps) {
  const { t } = useTranslation()

  return (
    <div className={styles.app}>
      {t('test.hello')}
      {message}
    </div>
  )
}

export default ComponenteExemplo
