import todoStore from '../stores/TodoStore';
import Todo from "../components/Todo";
import React, { Component } from "react";

export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoStore.getAll()
    };
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map(todo => {
      return <Todo key={todo.id} {...todo} />;
    });

    return (
      <div>
        {/*<button onClick={this.reloadTodos.bind(this)}>Reload!</button>
      <ul>{TodoComponents}</ul>*/}
        <h1>Todos</h1>
        <ul>{ TodoComponents }</ul>
      </div>
    );
  }
}
