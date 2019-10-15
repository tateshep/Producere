import React from 'react';
import Button from '@material-ui/core/Button';

const style = {
    margin: '10px',
}
const deleteTodo = () => {
    return (
            <Button style={style} variant="outlined" color="secondary">Delete</Button>
    )
}

export default deleteTodo;