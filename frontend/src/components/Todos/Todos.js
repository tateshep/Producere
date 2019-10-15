import React, { Component } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';
import CreateTodo from './CreateTodo';
import './Todos.css';

class Todos extends Component {
  state = {
    todos: [],
  }

  componentDidMount () {
    axios.get('http://127.0.0.1:8000/api/todos/')
      .then(response => {
        const data = response.data;
        this.setState({todos:data})
      });
  }

  render () {

    const todos = this.state.todos.map((todo,index) => {
      return (
        <div key={index}>
            <h1>{todo.title}</h1>
            <span>{todo.description}</span>
            <p>{todo.due_date} </p>
            <EditTodo></EditTodo>
            <DeleteTodo></DeleteTodo>
        </div>
      );
    })

    return (
        <div>
          <Container>
           { todos }
            <CreateTodo></CreateTodo>
          </Container>

      </div>
    );
  };
};

export default Todos;