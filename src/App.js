import "./App.css";
import React, {useState} from "react";

// import {TodoCounter} from "./Components/TodoCounter.js";
import TodoCounter from "./Components/TodoCounter.js";
import TodoSearch from "./Components/TodoSearch.js";
import TodoList from "./Components/TodoList.js";
import TodoItem from "./Components/TodoItem.js";
import CreateTodoButton from "./Components/CreateTodoButton.js";

// Ejemplo de useContext
import Pag1 from "./Components/Pag1.js";
import Pag2 from "./Components/Pag2.js";
import BtnCambiarData from "./Components/BtnCambiarData.js";
import {DataProvider} from "./context/DataContext.js"
const todos = [
  {
    text: "Cortar cebolla",
    completed: false,
  },
  {
    text: "Tomar el Curso de Intro a React",
    completed: false,
  },
  {
    text: "Criticar peliculas Independientes",
    completed: false,
  },
];

function App() {

  return (
    <DataProvider>
    <div className = "container">
      <Pag1/>
      <Pag2/>
      <BtnCambiarData/>
    </div>
    </DataProvider>
  );
}

export default App;
