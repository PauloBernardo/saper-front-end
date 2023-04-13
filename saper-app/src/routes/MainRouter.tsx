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
  Profile,
  StudentsAdd,
  StudentsEdit,
  BoxesAdd,
  BoxesEdit,
} from 'pages'
import { BaseLayout } from 'components'
import { AuthContext } from 'store/authContext'

const RequireAuth = ({ children }: { children: any }) => {
  const auth = useContext(AuthContext)

  if (!auth.user) {
    return <Navigate to='/login' />
  }

  return children
}

const MainRouter = () => {
  const auth = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/' element={<Outlet />} errorElement={<NotFound />}>
        {!auth.user ? (
          <>
            <Route path='' element={<PublicPage />} />
            <Route path='/login' element={<Login />} />
          </>
        ) : (
          <Route
            path=''
            errorElement={<NotFound />}
            element={
              <RequireAuth>
                <BaseLayout />
              </RequireAuth>
            }
          >
            <Route path={'home'} element={<Home />} />
            <Route path={'dashboard'} element={<Dashboard />} />
            <Route path={'profile'} element={<Profile />} />
            <Route path={'students'} element={<Outlet />}>
              <Route path={''} element={<StudentsList />} />
              <Route path={'add'} element={<StudentsAdd />} />
              <Route path={'edit/:id'} element={<StudentsEdit />} />
            </Route>
            <Route path={'professors'} element={<Outlet />}>
              <Route path={''} element={<ProfessorsList />} />
            </Route>
            <Route path={'boxes'} element={<Outlet />}>
              <Route path={''} element={<BoxesList />} />
              <Route path={'add'} element={<BoxesAdd />} />
              <Route path={'edit/:id'} element={<BoxesEdit />} />
            </Route>
            <Route path={'teams'} element={<Outlet />}>
              <Route path={''} element={<TeamsList />} />
            </Route>
          </Route>
        )}
      </Route>
      <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
    </Routes>
  )
}

export default MainRouter
