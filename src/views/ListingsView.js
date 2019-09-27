import React, { Component } from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import SideBar from '../components/nav/sidebar/SideBar';
import ToDoDisplayView from './ToDoDisplayView';
import ToDo from '../models/ToDo';
import NewToDoDialog from '../components/ToDo/newToDo/NewToDoDialog';

export default class LisitingsView extends Component {
  constructor() {
    super();
    this.state = {
      newToDoDialogOpen: false,
      allToDos: [
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
      ],
      todos: [
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
        new ToDo('Test Tile', 'Test Description', Date.now(), 'ToDo'),
      ],
    };
  }
  handleNewTodo = () => {
    const { state: currentState } = this;
    currentState.newToDoDialogOpen = true;
    this.setState(currentState);
  };

  handleCloseTodo = () => {
    const { state: currentState } = this;
    currentState.newToDoDialogOpen = false;
    this.setState(currentState);
  };

  render() {
    return (
      <React.Fragment>
        <NewToDoDialog
          open={this.state.newToDoDialogOpen}
          handleClose={this.handleCloseTodo}
        />
        <Box m={5}>
          <Grid container spacing={5}>
            <Grid item xs={2}>
              <SideBar handleNewTodo={this.handleNewTodo} />
            </Grid>
            <Grid item xs={10}>
              <Typography paragraph color="textPrimary">
                <ToDoDisplayView todos={this.state.todos} />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    );
  }
}
