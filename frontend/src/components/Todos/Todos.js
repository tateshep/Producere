import React from 'react';
import Container from '@material-ui/core/Container';

const Todos = (props) => {
    return (
        <div>
          <Container>
        {props.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
            <p>{item.due_date} </p>
          </div>
        ))}
          </Container>

      </div>
    )
}

export default Todos;