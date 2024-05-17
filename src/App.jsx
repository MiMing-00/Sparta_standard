import { useState } from "react";
import "./App.css";
import ToDoListContain from "../component/ToDoListContain";
import Layout from "../component/Layout";

function App() {
  return (
    <Layout>
      <ToDoListContain />
    </Layout>
  );
}

export default App;
