import React from "react";

function Todo({ todo, eliminarTodo, editarTodo }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {todo.nombre}{" "}
          {todo.prioridad && <span className="text-danger"> (Priority) </span>}
        </div>
        <p>{todo.descripcion}</p>
        <div>
          <button
            className="btn btn-danger me-2"
            onClick={() => eliminarTodo(todo.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-warning px-4"
            onClick={() => editarTodo(todo.id)}
          >
            Edit
          </button>
        </div>
      </div>
      <span className="badge bg-primary rounded-pill">
        {todo.estado ? "Completed" : "Pending"}
      </span>
    </li>
  );
}

export default Todo;
