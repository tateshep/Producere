import React, { Component } from 'react';
import './App.css';
import Todos from '../components/Todos/Todos';

// This app displays the todos in a shitty list
class App extends Component{
  state = {
    todos: []
  };

  async componentDidMount() {
    // is this the best place to make fetch call? Hoping to find out
    // in API section of class
    try {
      const res = await fetch ('http://127.0.0.1:8000/api/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Todos todos={this.state.todos } ></Todos>
    );
  }
}



export default App;
