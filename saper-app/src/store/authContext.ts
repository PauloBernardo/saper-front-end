import { createContext } from 'react'

export type User = {
  name: string
  login: string
  student_id: number
  profileImage: {
    id: number
    name: string
    type: string
    filePath: string
  }
  basicAuth: string
  roles: { authority: string }[]
}

export type AuthType = {
  user?: User
  updateUser?(user: User | undefined): void
}

const initialValue: AuthType = {}

export const AuthContext = createContext(initialValue)
