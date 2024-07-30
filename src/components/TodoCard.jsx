import React from "react";

const TodoCard = ({ children, handleDeleteTodos, handleEditTodos, index }) => {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => {
              handleEditTodos(index);
          }}>
          <i
          className="fa-regular fa-trash-can"
          
          className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
              handleDeleteTodos(index);
            }}>
          <i
            className="fa-regular fa-trash-can"
            
          ></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
