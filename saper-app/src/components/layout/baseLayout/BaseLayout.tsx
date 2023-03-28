import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './BaseLayout.module.scss'
import { AuthContext } from '../../../store/authContext'
import Sidebar, { MenuData } from '../sidebar/Sidebar'
import {
  FaBoxes,
  FaChalkboardTeacher,
  FaChartBar,
  FaGraduationCap,
  FaHouseUser,
  FaPeopleCarry,
} from 'react-icons/fa'

function BaseLayout() {
  const auth = useContext(AuthContext)

  const MenuRoles: { [role: string]: MenuData } = {
    ROLE_ADMIN: {
      links: [
        {
          text: 'layout.sidebar.home',
          path: '/saper/home',
          icon: <FaHouseUser />,
        },
        {
          text: 'layout.sidebar.dashboard',
          path: '/saper/dashboard',
          icon: <FaChartBar />,
        },
        {
          text: 'layout.sidebar.student',
          path: '/saper/students',
          icon: <FaGraduationCap />,
        },
        {
          text: 'layout.sidebar.professor',
          path: '/saper/professors',
          icon: <FaChalkboardTeacher />,
        },
        {
          text: 'layout.sidebar.box',
          path: '/saper/boxes',
          icon: <FaBoxes />,
        },
        {
          text: 'layout.sidebar.team',
          path: '/saper/teams',
          icon: <FaPeopleCarry />,
        },
      ],
      userLinks: [
        {
          text: 'layout.sidebar.profile',
          path: '/saper/profile',
        },
      ],
    },
    ROLE_PROFESSOR: {
      links: [
        {
          text: 'layout.sidebar.home',
          path: '/saper/home',
          icon: <FaHouseUser />,
        },
        {
          text: 'layout.sidebar.dashboard',
          path: '/saper/dashboard',
          icon: <FaChartBar />,
        },

        {
          text: 'layout.sidebar.student',
          path: '/saper/students',
          icon: <FaGraduationCap />,
        },
        {
          text: 'layout.sidebar.box',
          path: '/saper/boxes',
          icon: <FaBoxes />,
        },
        {
          text: 'layout.sidebar.team',
          path: '/saper/teams',
          icon: <FaPeopleCarry />,
        },
      ],
      userLinks: [
        {
          text: 'layout.sidebar.profile',
          path: '/saper/profile',
        },
      ],
    },
    ROLE_USER: {
      links: [
        {
          text: 'layout.sidebar.home',
          path: '/saper/home',
          icon: <FaHouseUser />,
        },
        {
          text: 'layout.sidebar.dashboard',
          path: '/saper/dashboard',
          icon: <FaChartBar />,
        },
        {
          text: 'layout.sidebar.team',
          path: '/saper/teams',
          icon: <FaPeopleCarry />,
        },
      ],
      userLinks: [
        {
          text: 'layout.sidebar.profile',
          path: '/saper/profile',
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
