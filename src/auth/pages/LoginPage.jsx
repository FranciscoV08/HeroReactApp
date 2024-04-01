import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';



export const LoginPage = () => {
// Adceso al context 
  const {login} = useContext(AuthContext)
  const navigate = useNavigate();  

  const onLogin = () =>{
    // Guarda nuestro lastPath para poder guardar nuestro progreso
    const lastPath = localStorage.getItem('lastPath') || '/';


    login('Francisco');
    // El replace remplasa el historial para que la persona no vuelva atras
    navigate(lastPath,{
      replace: true
    })
  }
  return (
    <div className='container'>
      <h1>Login</h1>
      <hr />

      <button 
        className='btn btn-primary'
        onClick={ onLogin }
        >
          Login

      </button>
    </div>
  )
}
