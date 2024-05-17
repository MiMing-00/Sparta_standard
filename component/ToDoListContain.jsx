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
      <ToDoList
        title="working"
        toDoLists={toDoLists.filter((item) => !item.isDone)}
        setToDoLists={setToDoLists}
      />
      <ToDoList
        title="done"
        toDoLists={toDoLists.filter((item) => item.isDone)}
        setToDoLists={setToDoLists}
      />
    </div>
  );
}

export default ToDoListContain;
