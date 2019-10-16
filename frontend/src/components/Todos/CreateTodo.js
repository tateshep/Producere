import React, { Component } from 'react';
import axios from 'axios';
import 'date-fns';


import { withStyles } from '@material-ui/core/styles'; // this uses HOCs somehow. Still foggy on this but it seems to be working
//  https://stackoverflow.com/questions/56432167/how-to-style-components-using-makestyles-and-still-have-lifecycle-methods-in-mat


// import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';



const useStyles = () => ({
    //Need to learn how to replace this with external style sheet.
    // I gave it a half hearted effort and it wasnt working
    root: {
        margin: '10px',
        padding: '24px',
        marginBottom: '10vh',

    },
    Select: {
        width: '33%'
    },
    myBtn: {
        float: 'right',
    }
});

class CreateTodo extends Component {
    // would like this to open a modal with a form
    // that will submit a new todo to the API0

    state = {
        title: '',
        content: '',
        author: '',
        dueDate: '',
    }

    createTodoHandler = () => {
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
            dueDate: this.state.dueDate,
        }
        console.log(data)
    //     axios.post('http://127.0.0.1:8000/api/todos/', data)
    //     .then(response => {
    //         console.log(response);
    //   }); 
    }

    render () {

        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root}>
                <h1>Add a Todo</h1>
                    <TextField 
                        margin="normal" 
                        label='Title' 
                        type="text" 
                        fullWidth
                        value={this.state.title} 
                        onChange={(event) => this.setState({title:event.target.value})}
                        />
                       
                    <TextField 
                        margin="normal"
                        multiline
                        fullWidth
                        label="Content" 
                        value={this.state.content} 
                        cols="30" 
                        rows="4" 
                        onChange={(event) => this.setState({content:event.target.value})}
                         />
                        
                        <InputLabel htmlFor="author">Author</InputLabel>
                        <Select
                        className= {classes.Select}
                        value={this.state.author}
                        onChange={(event) => this.setState({author:event.target.value})}
                        >
                            <MenuItem value='Tate'>Tate</MenuItem>
                            <MenuItem value='Gandalf'>Gandalf</MenuItem>
                            <MenuItem value='Whatever'>Whatever</MenuItem>
                        </Select>
                    
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Due Date"
                            format="MM/dd/yyyy"
                            value={this.state.dueDate}
                            onChange={(event) => this.setState({dueDate:event.target.value})}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />

                    </MuiPickersUtilsProvider>

                    <Button className={classes.myBtn} variant="contained" color="Primary" onClick={() => this.createTodoHandler()}>Add</Button>
                </Paper>
            </div>


        );
    }
}

export default withStyles(useStyles)(CreateTodo);