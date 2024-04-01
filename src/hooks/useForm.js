import { useState } from 'react';

// Definimos un hook personalizado llamado `useForm`
export const useForm = (initialForm = {}) => {
  // Utilizamos el hook `useState` para inicializar el estado del formulario
  // `formState` almacenará el estado actual del formulario
  // `setFormState` es una función para actualizar el estado del formulario
  const [formState, setFormState] = useState(initialForm);

  // Esta función maneja los cambios en los campos del formulario
  const onInputChange = ({ target }) => {
    // Extraemos el nombre y el valor del campo que ha cambiado
    const { name, value } = target;
    // Actualizamos el estado del formulario con el nuevo valor
    setFormState({
      ...formState, // Mantenemos los valores existentes del formulario
      [name]: value // Actualizamos el valor del campo que ha cambiado
    });
  };

  // Esta función restablece el formulario al estado inicial
  const onResetForm = () => {
    // Restablecemos el estado del formulario al valor inicial proporcionado
    setFormState(initialForm);
  };

  // Devolvemos un objeto que contiene el estado actual del formulario,
  // así como las funciones para manejar los cambios y restablecer el formulario
  return {
    ...formState, // Estado actual del formulario
    formState, // Esto parece ser redundante y podría eliminarse
    onInputChange, // Función para manejar los cambios en el formulario
    onResetForm, // Función para restablecer el formulario al estado inicial
  };
};
