import React, {useState} from 'react'
import {AuthContext, User} from "./store/authContext";
import MainRouter from "./routes/MainRouter";

function App() {
  const [user, setUser] = useState<User>();

  return (
      <AuthContext.Provider value={{user, updateUser: setUser}}>
        <MainRouter />
      </AuthContext.Provider>
  )
}

export default App
