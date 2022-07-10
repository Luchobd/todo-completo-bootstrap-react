// import React, { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "../hooks/useForm";

function Formulario({ agregarTodo }) {
  // ================================================================
  // Esto fue creado para practicar la creacion de hooks personalizados
  const initialState = {
    nombre: "",
    descripcion: "",
    estado: "pendiente",
    prioridad: false,
  };

  // Este Hook es el creado que s eencuentra en la carpeta hook -> useForm.js
  const [inputs, handleChange, reset] = useForm(initialState);

  // =================================================================

  // const [todo, setTodo] = useState({
  //   nombre: "",
  //   descripcion: "",
  //   estado: "pendiente",
  //   prioridad: false,
  // });

  // Destructuring useState ToDo
  // const { nombre, descripcion, estado, prioridad } = todo;

  // Destructuring CUSTOM HOOK ->  traido del hooks creato y customizado
  const { nombre, descripcion, estado, prioridad } = inputs;

  // const handleChange = (e) => {
  //   // Destructuring e.target
  //   const { value, type, name, checked } = e.target;

  //   // usamos una propiedad en la funcion flecha para guardar el estado anterior.
  //   setTodo((old) => ({
  //     ...old,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ===================================================
    // Validacion del formulario con una pequeña alert.
    if (!nombre.trim() || !descripcion.trim()) {
      // Con este comando podemos hacer focus en un input para que quede marcado. el [0] significa el orden de los input, por ser el primero es 0.
      e.target[0].focus();
      // ==================================================
      Swal.fire({
        title: "Error!",
        text: "No deje los espacios en blanco",
        icon: "error",
        confirmButtonText: "Back",
      });
      return;
    }
    Swal.fire({
      title: "Congratulations!!!",
      text: "Completed Tasks ",
      icon: "success",
      confirmButtonText: "Back",
    });

    agregarTodo({
      nombre,
      descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad,
      id: uuidv4(), // También se puede usar Date.now() "nativo de JS"
    });
    // console.log(todo);

    // Reiniciar todos los inputs al enviar al darle click al boton submit.
    // setTodo({
    //   nombre: "",
    //   descripcion: "",
    //   estado: "pendiente",
    //   prioridad: false,
    // });

    // usando "reset()" traido del hooks creato y customizado
    reset();
  };

  return (
    <>
      <h3>Agregar ToDo</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          name="nombre"
          placeholder="Ingrese TODO nombre"
          value={nombre}
          onChange={handleChange}
        />

        <textarea
          placeholder="Ingrese Descripcion"
          className="form-control mb-2"
          name="descripcion"
          value={descripcion}
          onChange={handleChange}
        />

        <select
          name="estado"
          className="form-control mb-2"
          value={estado}
          onChange={handleChange}
        >
          <option value="pendiente">pendiente</option>
          <option value="completado">completado</option>
        </select>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={prioridad}
            id="flexCheckDefault"
            name="prioridad"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <span> Priority </span>
          </label>
        </div>

        <br />
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
      <br />
    </>
  );
}

export default Formulario;
