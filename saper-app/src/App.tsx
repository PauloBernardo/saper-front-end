import React, { useEffect, useState } from 'react'
import { AuthContext, User } from './store/authContext'
import MainRouter from './routes/MainRouter'

function App() {
  const [user, setUser] = useState<User>()

  const updateUser = (user: User) => {
    setUser(user)
    if (user) localStorage.setItem('user', JSON.stringify(user))
    else localStorage.removeItem('user')
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    setUser(user ? JSON.parse(user) : undefined)
  }, [])

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      <MainRouter />
    </AuthContext.Provider>
  )
}

export default App
