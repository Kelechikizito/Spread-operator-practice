import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [newItem, setNewItem] = useState([]);

  function handleChange(e) {
    const value = e.target.value;

    setInput(value);
  }

  function handleClick() {
    setNewItem((prevValue) => {
      return [...prevValue, input];
    });

    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={handleChange}
          value={input}
          placeholder="Enter a new item"
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newItem.map((listItem) => (
            <li>{listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
