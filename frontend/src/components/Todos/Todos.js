import React from 'react';
import Container from '@material-ui/core/Container';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';
import CreateTodo from './CreateTodo';
import './Todos.css';


const Todos = (props) => {
    return (
        <div>
          <Container>
            <CreateTodo></CreateTodo>
        {props.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
            <p>{item.due_date} </p>
            <EditTodo className="button-w-spacing"></EditTodo>
            <DeleteTodo></DeleteTodo>
          </div>
        ))}
          
          </Container>

      </div>
    )
}

export default Todos;