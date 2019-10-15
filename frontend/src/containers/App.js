import React, { Component } from 'react';
import './App.css';
import Todos from '../components/Todos/Todos';
import Cockpit from '../components/Cockpit/Cockpit';

// This app displays the todos in a shitty list
class App extends Component{
  state = {
    todos: []
  };

  render() {
    return (
      <div>

        <Cockpit></Cockpit>
        <Todos></Todos>

      </div>

    );
  }
}



export default App;
