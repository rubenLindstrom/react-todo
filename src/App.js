import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from "./components/todoList";
import TodoItem from "./components/todoItem";
import TodoInput from "./components/todoInput";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <TodoList />
          <TodoInput />
        </div>
      </div>
    </div>
  );
}

export default App;
