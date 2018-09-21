import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as itemActions from '../actions/itemActions';
import "../styles/todoList.css";
import TodoItems from "./TodoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    var todo = this.refs.todo.value;
    if (todo !== "") {
      this.props.actions.addTodo(todo);
      this.refs.todo.value = ""; // clear the field
    }
    e.preventDefault();
  }

  deleteItem(key) {
    this.props.actions.deleteTodo(key);
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref="todo"
              placeholder="enter todo">
            </input>
            <button type="submit">add todo</button>
          </form>
        </div>

        { /* Important: Redux passes the items down via props rather than state this.state.items */ }
        <TodoItems entries={this.props.items}
                  delete={this.deleteItem}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
