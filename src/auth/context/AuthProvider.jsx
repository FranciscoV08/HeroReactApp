import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

import { types } from "../types/types"

// Este AUTHPROVIDER utiliza el context. Para que el AhutProvider distribuya el contenido a la app

const init = () => {
  const user = JSON.parse(localStorage.getItem('user') );

  return{
    logged: !!user,
    user,
  }
}

// Provider que encapsulara toda la appa para que los componentes puedan adceder al contexto
export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (name = '') => {
      const user = {id: 'ABC', name}
      const action = { type: types.login, payload: user}
      // LocalStorage
      localStorage.setItem('user', JSON.stringify( user ))
      // console.log(action)
      dispatch(action);
    }
    
    const logout = () => {
      localStorage.removeItem('user');
      const action ={type: types.logout}
      dispatch(action) 
    }

  return (
    // Exponemos las propiedades
    <AuthContext.Provider value={{
      ...authState,
      login: login,
      logout
    }}>{ children }
    </AuthContext.Provider>
  )
}
