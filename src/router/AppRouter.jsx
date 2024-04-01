// Se le da este nombre al router principal de la app
//Esta pagina Seta nuestro router el que mantendra todas las rutas

// Mediante Archivo de Barril
import { LoginPage } from "../auth/pages"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../heroes"
import { HeroesApp } from "../HeroesApp"

import { 
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRoute } from "./PublicRoute"


const router = createBrowserRouter([
    {
        path:"/",
        element:<PrivateRouter> <HeroesApp /> </PrivateRouter>,
        children:
            [
            {
                path:"/marvel",
                element: <MarvelPage  />
            },
            {
                path:"/dc",
                element: <DcPage />
            },
            {
                path:"/search",
                element: <SearchPage />
            },
            {
                // Agregamos un comodin para que agrege el id del hero
                path:"/hero/:id",
                element: <HeroPage />
            },
        ]
    },
    {   
        path:"/login",
        // element:<LoginPage />
        element:<PublicRoute> <LoginPage /> </PublicRoute>
    }

    

])

export const AppRouter = () => {
  return (
    <> 
        <RouterProvider router={router}/>
    </>
  )
}
