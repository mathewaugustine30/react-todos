import React, { useContext } from "react";
import { AppContext } from "../App";

const TodoItem = ({ item, index }) => {
  const context = useContext(AppContext);
  return (
    <div className="todo-list">
      <li style={{ textDecoration: item.complete ? "line-through" : "" }}>
        {item.todo}{" "}
      </li>
      <div className="btns">
        <button onClick={() => context.completeTodoItem(index)}>
          Complete
        </button>
        <button onClick={() => context.updateTodoItem(index)}>Update</button>
        <button onClick={() => context.deleteTodoItem(index)}>X</button>
      </div>
    </div>
  );
};
export default TodoItem;
