import { useState } from "react";
import "./App.css";
import ToDoListContain from "../component/ToDoListContain";

function App() {
  return (
    <div>
      <main className="layout">
        <ToDoListContain />
      </main>
    </div>
  );
}

export default App;
