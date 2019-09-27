import React, { Component } from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import SideBar from '../components/nav/sidebar/SideBar';
import ToDo from '../models/ToDo';
import NewToDoDialog from '../components/ToDo/newToDo/NewToDoDialog';
import ToDoDisplayGrid from '../components/ToDo/ToDoDisplayGrid';
import moment from 'moment';

export default class LisitingsView extends Component {
  constructor() {
    super();
    this.state = {
      newToDoDialogOpen: false,
      allToDos: [],
      todos: [],
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

  handleOnSave = (title, description, date) => {
    const { state: currentState } = this;
    currentState.allToDos.push(new ToDo(title, description, date, 'ToDo'));
    this.setState(currentState, this.setAllTodos);
  };

  handleStatusChange = (key, status) => {
    const { state: currentState } = this;
    currentState.allToDos[key].status = status;
    this.setState(currentState, this.setAllTodos);
  };

  setAllTodos = () => {
    const { state: currentState } = this;
    currentState.todos = [];
    currentState.allToDos.forEach((value) => currentState.todos.push(value));
    this.setState(currentState);
  };

  filterToDos = (statusValue) => {
    const { state: currentState } = this;
    currentState.todos = [];
    currentState.todos = currentState.allToDos.filter((todo) => {
      return todo.status === statusValue;
    });
    this.setState(currentState);
  };

  handleMenuClick = (ACTION) => {
    switch (ACTION) {
      case 'NEW_TODO':
        this.handleNewTodo();
        return;
      case 'ALL_TODOS':
        this.setAllTodos();
        return;
      case 'COMPLETED':
        this.filterToDos('Completed');
        return;
      case 'IN_PROGRESS':
        this.filterToDos('In Progress');
        return;
      case 'STALLED':
        this.filterToDos('Stalled');
        return;
      case 'TO_DO':
        this.filterToDos('ToDo');
        return;
      default:
        return;
    }
  };

  render() {
    return (
      <React.Fragment>
        <NewToDoDialog
          open={this.state.newToDoDialogOpen}
          handleClose={this.handleCloseTodo}
          onSave={this.handleOnSave}
        />
        <Box m={5}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <SideBar handleMenuClick={this.handleMenuClick} />
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography paragraph color="textPrimary">
                <Box m={2}>
                  <Typography variant="h2" componennt="h2" align="right">
                    Your Great Day !
                  </Typography>
                  <Typography variant="h6" componennt="h6" align="right">
                    {moment(new Date()).format('DD MMMM')}
                  </Typography>
                </Box>
                <Box m={5}>
                  <ToDoDisplayGrid
                    todos={this.state.todos}
                    handleStatusChange={this.handleStatusChange}
                  />
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    );
  }
}
