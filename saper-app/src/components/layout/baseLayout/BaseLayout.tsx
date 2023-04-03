import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import {
  FaBoxes,
  FaChalkboardTeacher,
  FaChartBar,
  FaGraduationCap,
  FaHouseUser,
  FaPeopleCarry,
} from 'react-icons/fa'

import { AuthContext } from 'store/authContext'
import Sidebar, { MenuData } from '../sidebar/Sidebar'

import styles from './BaseLayout.module.scss'

function BaseLayout() {
  const auth = useContext(AuthContext)

  const MenuRoles: { [role: string]: MenuData } = {
    ROLE_ADMIN: {
      links: [
        {
          text: 'layout.sidebar.home',
          path: 'home',
          icon: <FaHouseUser />,
        },
        {
          text: 'layout.sidebar.dashboard',
          path: 'dashboard',
          icon: <FaChartBar />,
        },
        {
          text: 'layout.sidebar.student',
          path: 'students',
          icon: <FaGraduationCap />,
        },
        {
          text: 'layout.sidebar.professor',
          path: 'professors',
          icon: <FaChalkboardTeacher />,
        },
        {
          text: 'layout.sidebar.box',
          path: 'boxes',
          icon: <FaBoxes />,
        },
        {
          text: 'layout.sidebar.team',
          path: 'teams',
          icon: <FaPeopleCarry />,
        },
      ],
      userLinks: [
        {
          text: 'layout.sidebar.profile',
          path: 'profile',
        },
      ],
    },
    ROLE_PROFESSOR: {
      links: [
        {
          text: 'layout.sidebar.home',
          path: 'home',
          icon: <FaHouseUser />,
        },
        {
          text: 'layout.sidebar.dashboard',
          path: 'dashboard',
          icon: <FaChartBar />,
        },

        {
          text: 'layout.sidebar.student',
          path: 'students',
          icon: <FaGraduationCap />,
        },
        {
          text: 'layout.sidebar.box',
          path: 'boxes',
          icon: <FaBoxes />,
        },
        {
          text: 'layout.sidebar.team',
          path: 'teams',
          icon: <FaPeopleCarry />,
        },
      ],
      userLinks: [
        {
          text: 'layout.sidebar.profile',
          path: 'profile',
        },
      ],
    },
    ROLE_USER: {
      links: [
        {
          text: 'layout.sidebar.home',
          path: 'home',
          icon: <FaHouseUser />,
        },
        {
          text: 'layout.sidebar.dashboard',
          path: 'dashboard',
          icon: <FaChartBar />,
        },
        {
          text: 'layout.sidebar.team',
          path: 'teams',
          icon: <FaPeopleCarry />,
        },
      ],
      userLinks: [
        {
          text: 'layout.sidebar.profile',
          path: 'profile',
        },
      ],
    },
  }

  return (
    <div className={styles.container}>
      <Sidebar {...MenuRoles[auth.user?.roles[0].authority || 'ROLE_USER']} />

      <Outlet />
    </div>
  )
}

export default BaseLayout
