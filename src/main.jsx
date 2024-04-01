import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './auth/context/AuthProvider.jsx'
import { AppRouter } from './router/AppRouter.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render( 
  // <StrictMode.React>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>,
  // </StrictMode.React>
)
