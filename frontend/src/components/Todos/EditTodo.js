import React from 'react';
import Button from '@material-ui/core/Button';

const style = {
    margin: '10px',
}
const editTodo = () => {
    return (
            <Button style={style} className="Buttonwspacing" variant="outlined">Edit</Button>
    )
}

export default editTodo;