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
  TeamsList, StudentsAdd,
} from '../pages'
import { BaseLayout } from '../components'
import { AuthContext } from '../store/authContext'
import StudentsEdit from "../pages/students/studentsEdit/StudentsEdit";

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
          path='saper'
          errorElement={<NotFound />}
          element={
            <RequireAuth>
              <BaseLayout />
            </RequireAuth>
          }
        >
          <Route path={'home'} element={<Home />} />
          <Route path={'dashboard'} element={<Dashboard />} />
          <Route path={'students'} element={<Outlet />}>
            <Route path={''} element={<StudentsList />} />
            <Route path={'add'} element={<StudentsAdd />} />
            <Route path={'edit/:id'} element={<StudentsEdit />} />
          </Route>
          <Route path={'professors'} element={<ProfessorsList />} />
          <Route path={'boxes'} element={<BoxesList />} />
          <Route path={'teams'} element={<TeamsList />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default MainRouter
