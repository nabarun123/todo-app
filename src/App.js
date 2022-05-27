import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  function handleClick() {
    setTodoItems([...todoItems, todoText]);
    setTodoText("");
  }

  function handleDelete(index) {
    setDoneItems([...doneItems, todoItems[index]]);
    const todoItemsNew = [...todoItems];
    todoItemsNew.splice(index, 1); // to remove items from the array(index) by 1 item.
    setTodoItems(todoItemsNew);
  }

  function clearAll() {
    setDoneItems([]);
  }

  return (
    <div className="App">
      <h2>Enter your ToDos here</h2>
      <input
        type="text"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
      />
      <button onClick={handleClick}>Add Todo</button>

      {todoItems.length > 0 && <h3>ToDo items</h3>}
      <ul>
        {todoItems.map((
          item,
          index // to create each of the items as 'li' items we use 'map'.
        ) => (
          <li>
            {item}
            <button
              style={{ marginLeft: "20px" }}
              onClick={() => handleDelete(index)} // whenever we want to pass a 'parameter' to a funtion always use arrow function.
            >
              DONE
            </button>
          </li>
        ))}
      </ul>

      {doneItems.length > 0 && <h3>ToDo items done</h3>}
      <ul>
        {doneItems.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
      {doneItems.length > 0 && <button onClick={clearAll}>Clear all</button>}
    </div>
  );
}
