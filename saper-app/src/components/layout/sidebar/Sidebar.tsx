import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { AuthContext } from 'store/authContext'

import styles from './Sidebar.module.scss'
import brandImage from 'assets/img/brand.png'

type LinkData = {
  text: string
  icon: JSX.Element
  path: string
}

type UserLinkData = {
  text: string
  path: string
}

export type MenuData = {
  links: LinkData[]
  userLinks: UserLinkData[]
}

function Sidebar({ links, userLinks }: MenuData) {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const { t } = useTranslation()

  function signOut() {
    if (auth.updateUser) auth.updateUser(undefined)
    navigate('/')
  }

  return (
    <div className={'d-flex flex-column flex-shrink-0 p-3 text-bg-dark ' + styles.sidebar}>
      <Link
        to='/home'
        className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'
      >
        <img className={styles.brand} src={brandImage} alt={'brand'} />
        <span className='fs-4'>{t('layout.brand')}</span>
      </Link>
      <hr />
      <ul className='nav nav-pills flex-column mb-auto'>
        {links.map((link) => {
          return (
            <li key={link.path} className='nav-item'>
              <Link to={link.path} className='nav-link text-white' aria-current='page'>
                {link.icon} {t(link.text)}
              </Link>
            </li>
          )
        })}
      </ul>
      <hr />
      <div className='dropdown'>
        <a
          href='#'
          className='d-flex align-items-center text-white text-decoration-none dropdown-toggle'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <img
            src={process.env.REACT_APP_BACK_HOST + '/files/' + auth.user?.profileImage.id}
            alt=''
            width='32'
            height='32'
            className='rounded-circle me-2'
          />
          <strong>{auth.user?.name}</strong>
        </a>
        <ul className='dropdown-menu dropdown-menu-dark text-small shadow'>
          {userLinks.map((link) => {
            return (
              <li key={link.path} className='nav-item'>
                <Link to={link.path} className='dropdown-item' aria-current='page'>
                  {t(link.text)}
                </Link>
              </li>
            )
          })}
          <li>
            <hr className='dropdown-divider' />
          </li>
          <li>
            <div style={{ cursor: 'pointer' }} onClick={() => signOut()} className='dropdown-item'>
              {t('layout.sidebar.logout')}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
