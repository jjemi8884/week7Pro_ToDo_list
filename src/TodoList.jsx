import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(props);

  }

  render() {
    // TODO: Implement the map function to iterate over the todos array 
    // and render each todo as a Todo component.
    // Each Todo component should receive the todo object as a prop.

    return (
      
      <ul>
      {this.state.length === 0 && "No Todos"}
       {this.state.todos.map(todo => {
        return (
          <Todo
          key={todo.id}
            {...todo}
          />
        )
      })}
      </ul>
    );
  }
}

export default TodoList;