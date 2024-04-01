import { useMemo } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"; // Importar el hook useParams y el componente Navigate de react-router-dom
import { getHeroById } from "../helpers"; // Importar la función getHeroById desde el archivo helpers.js

export const HeroPage = () => {
  // Utilizar el hook useParams para obtener los parámetros de la URL
  const { id } = useParams();
  // Llamar a la función getHeroById con el id obtenido de los parámetros de la URL | Obtenemos toda la info del héroe

  const hero = useMemo( ()  => getHeroById(id), [id]);

  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1);
  }


  // Verificar si el héroe existe
  if (!hero) {
    // Si el héroe no existe, redirigir al usuario a la página de Marvel usando Navigate
    return <Navigate to={'/marvel'} />;
  }
  // Renderizar el nombre del héroe en un encabezado
  return (
    <div className="row mt-5   animate__animated animate__fadeInLeft">
        <div className="col-4">
          <img 
            src={`/assets/heroes/${ id }.jpg`} 
            alt={hero.superhero} 
            className="img-thumbnail"
          />
        </div>

        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b> Alter Ego:</b> {hero.alter_ego} </li>
            <li className="list-group-item"> <b> Publisher:</b> {hero.publisher} </li>
            <li className="list-group-item"> <b> First appearance:</b> {hero.first_appearance} </li>
          </ul>
          <h5 className="mt-3"> Characters </h5>
          <p>{hero.characters}</p>

          <button 
            className="btn btn-primary"
            onClick={ onNavigateBack }
            >
            Volver
          </button>
        </div>
    </div>
  );
}
