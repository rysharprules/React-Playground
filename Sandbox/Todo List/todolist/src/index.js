import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import TodoList from "./TodoList";

const destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);
