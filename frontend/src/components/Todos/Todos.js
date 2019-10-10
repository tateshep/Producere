import React from 'react';

const Todos = (props) => {
    return (
        <div>
        {props.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
            <p>{item.due_date} </p>
          </div>
        ))}

      </div>
    )
}

export default Todos;