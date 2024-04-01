// Importamos el arreglo de héroes desde el archivo de datos
import { heroes } from "../data/heroes";

// Definimos la función para obtener un héroe por su id
export const getHeroById = (id) => {
    // Utilizamos el método find() para buscar un héroe con el id proporcionado
    const heroFound = heroes.find(hero => hero.id === id);

    // Retornamos el héroe encontrado (o undefined si no se encuentra)
    return heroFound;
}
