import React, { useContext } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import {
  NotFound,
  PublicPage,
  Login,
  Home,
  Dashboard,
  StudentsList,
  ProfessorsList,
  BoxesList,
  TeamsList,
} from '../pages'
import { BaseLayout } from '../components'
import { AuthContext } from '../store/authContext'

const RequireAuth = ({ children }: { children: any }) => {
  const auth = useContext(AuthContext)

  if (!auth.user) {
    return <Navigate to='/login' />
  }

  return children
}

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<Outlet />} errorElement={<NotFound />}>
        <Route path='/' element={<PublicPage />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/saper'
          errorElement={<NotFound />}
          element={
            <RequireAuth>
              <BaseLayout />
            </RequireAuth>
          }
        >
          <Route path={'/saper/home'} element={<Home />} />
          <Route path={'/saper/dashboard'} element={<Dashboard />} />
          <Route path={'/saper/students'} element={<StudentsList />} />
          <Route path={'/saper/professors'} element={<ProfessorsList />} />
          <Route path={'/saper/boxes'} element={<BoxesList />} />
          <Route path={'/saper/teams'} element={<TeamsList />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default MainRouter
