import React, { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";
// import "bootstrap/dist/css/bootstrap.min.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  // ===================================================
  // Local Storage -> usando useEffect
  /* El hook de useEffect -> Es una funcion que se ejecuta cada vez que queramos, es decir cada vez que se renderiza la pagina el useEffect se actualiza, con los corchetes solo se va a ejecutar una sola vez */
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ===================================================

  const agregarTodo = (todo) => {
    // console.log(todo);
    setTodos((old) => [...old, todo]);
  };

  // Funcion de Elminar ToDo
  const eliminarTodo = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id));
  };

  // Funcion de Editar ToDo -> modifica el texto entre "completed" y "pending" cada vex que es precionado el boton de "edit" esto se hace con un boolean
  const editarTodo = (id) => {
    const editarTodos = todos.map((item) =>
      item.id === id ? { ...item, estado: !item.estado } : item
    );
    setTodos(editarTodos);
  };

  return (
    <>
      <Formulario agregarTodo={agregarTodo} />
      <ol className="list-group list-group-numbered">
        {/* Map para renderizar las tareas */}
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            eliminarTodo={eliminarTodo}
            editarTodo={editarTodo}
          />
        ))}
      </ol>
    </>
  );
}

export default TodoList;
