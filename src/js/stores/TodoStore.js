import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 12345,
        text: "Learn React",
        complete: false
      },
      {
        id: 12346,
        text: "Play Soccer",
        complete: true
      }
    ] 
  }

  createTodo(text) {
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false
    })

    this.emit("change");
  }

  getAll() {
    return this.todos;
  }
  handleActions(action) {
    switch (action.type) {
      case "CREATE_TODO":
        this.createTodo(action.text);
    }
  }
  
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;