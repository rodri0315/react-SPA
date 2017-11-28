import { EventEmitter } from 'events';

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

  getAll() {
    return this.todos;
  }
  
}

const todoStore = new TodoStore;

export default todoStore;