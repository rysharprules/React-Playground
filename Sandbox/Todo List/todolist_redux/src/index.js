import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import TodoList from "./components/TodoList";

import "./styles/style.css";

const store = configureStore();
const destination = document.querySelector("#container");

ReactDOM.render(
    <Provider store={store}>
        <TodoList/>
    </Provider>,
    destination
);
