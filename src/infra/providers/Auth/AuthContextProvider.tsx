import { createContext, useState } from 'react'
import { IAuthContext } from './IAuthContext'


const AuthContext = createContext({} as IAuthContext)

export function AuthContextProvider({ children }: any) {

  const [ User, setUser ]: any = useState(true)

  return (
    <AuthContext.Provider 
      value={{ 
        loggedIn: Boolean(User),
        User,
        setUser
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext