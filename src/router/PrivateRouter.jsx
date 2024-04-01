import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRouter = ({children}) => {

    const {logged} = useContext(AuthContext);
    const {search, pathname} =useLocation();
    const lastPath = pathname + search;
    localStorage.setItem('lastPath',lastPath);

    // console.log(location)

  return logged ? children : <Navigate to={'/login'}/>

}
