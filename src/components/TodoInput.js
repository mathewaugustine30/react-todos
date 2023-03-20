import React, { useContext } from "react";
import { AppContext } from "../App";

const TodoInput = ({ createTodoItem }) => {
  const context = useContext(AppContext);

  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return console.log("Please add something to-do");
    }
    context.createTodoItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Create</button>
    </form>
  );
};
export default TodoInput;
