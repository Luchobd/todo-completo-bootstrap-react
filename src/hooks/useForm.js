import React, { useState } from "react";

// Crear mi propio Hook
export const useForm = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (e) => {
    // Destructuring e.target
    const { value, type, name, checked } = e.target;

    // usamos una propiedad en la funcion flecha para guardar el estado anterior.
    setInputs((old) => ({
      ...old,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const reset = () => {
    setInputs(initialState);
  };

  return [inputs, handleChange, reset];
};
