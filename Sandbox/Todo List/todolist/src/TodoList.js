import React, { Component } from "react";
import "./styles/todoList.css";
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
    e.preventDefault();
    var todo = this.refs.todo.value;
    var itemArray = this.state.items;

    if (todo !== "") {
      itemArray.unshift(
        {
          text: todo,
          key: Date.now()
        }
      );

      this.setState({
        items: itemArray
      });

      todo = ""; // clear the field
    }
    console.log(itemArray);
  }

  deleteItem(key) {
    // make new array with key filtered out
    var filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
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

        <TodoItems entries={this.state.items}
                  delete={this.deleteItem}/>
      </div>
    );
  }
}

export default TodoList;
