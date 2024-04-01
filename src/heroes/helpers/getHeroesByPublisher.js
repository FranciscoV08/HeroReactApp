// Importar el arreglo de héroes desde el archivo de datos
import { heroes } from '../data/heroes';

// Definir la función para obtener héroes por editor
export const getHeroesByPublisher = (publisher) => {
    // Arreglo de editores válidos
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    // Verificar si el editor proporcionado está en la lista de editores válidos
    if (!validPublisher.includes(publisher)) {
        // Lanzar un error si el editor no es válido
        throw new Error(`${publisher} is not a valid publisher.`);
    }

    // Filtrar el arreglo de héroes para obtener solo los héroes del editor proporcionado
    const heroesFiltered = heroes.filter(hero => hero.publisher === publisher);

    // Devolver el arreglo de héroes filtrado
    return heroesFiltered;
}
