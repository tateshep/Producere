import React from 'react';
import Button from '@material-ui/core/Button';


const createTodo = () => {
    // would like this to open a modal with a form
    // that will submit a new todo to the API
    return (
            <Button variant="contained" color="Primary">Create</Button>
    )
}

export default createTodo;