import { useState } from "react";
import FormTodoList from "./FormTodoList";
import ToDoList from "./ToDoList";

function ToDoListContain() {
  const [toDoLists, setToDoLists] = useState([
    { id: 1, title: "안녕", content: "ㅎㅇ", isDone: false },
  ]);

  return (
    <div>
      <FormTodoList setToDoLists={setToDoLists} />
      <ToDoList title="working" toDoLists={toDoLists} />
      <ToDoList title="done" toDoLists={toDoLists} />
    </div>
  );
}

export default ToDoListContain;
