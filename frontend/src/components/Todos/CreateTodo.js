import React, { Component } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menuitem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const style = {
    //Need to learn how to replace this with external style sheet.
    // I gave it a half hearted effort and it wasnt working
    margin: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
}

class CreateTodo extends Component {
    // would like this to open a modal with a form
    // that will submit a new todo to the API

    state = {
        title: '',
        content: '',
        author: '',
    }


    createTodoHandler= () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        }
        console.log(data);
    }

    render () {
        return (
            <div>
                <h1>Add a Todo</h1>
                <form className='' noValidate autoComplete="off">
                    
                    <TextField 
                        margin="normal" 
                        label='Title' 
                        type="text" 
                        value={this.state.title} 
                        onChange={(event) => this.setState({title:event.target.value})}
                        />
                    <TextField 
                        margin="normal"
                        multiline
                        label="Content" 
                        value={this.state.content} 
                        cols="30" 
                        rows="4" 
                        onChange={(event) => this.setState({content:event.target.value})}
                         />
                    <label>Author</label>
                    <select value={this.state.author} onChange={(event) => this.setState({author:event.target.value})}>
                        <option value="Tate">Tate</option>
                        <option value="Gandalf">Gandalf</option>
                    </select>
                    <Button style={style} variant="contained" color="Primary" onClick={() => this.createTodoHandler()}>Add</Button>
                </form>
            </div>


        );
    }
}

export default CreateTodo;