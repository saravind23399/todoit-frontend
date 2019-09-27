import React, { Component } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import Steps from '../../common/Steps';
import CreateToDoPanel from './CreateToDoPanel';
import CreateWhenToDoPanel from './CreateWhenToDoPanel';
import ConfirmToDoPanel from './ConfirmToDoPanel';
import { CloseOutlined } from '@material-ui/icons';
import moment from 'moment';

export default class NewToDoDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      title: '',
      description: '',
      date: moment(),
    };
  }

  inputChangeHandle = (e) => {
    const { state: currentState } = this;
    currentState[e.target.id] = e.target.value;
    this.setState(currentState);
  };

  dateChangeHandle = (date) => {
    const { state: currentState } = this;
    currentState.date = date;

    this.setState(currentState);
  };

  _renderPanels = () => {
    switch (this.state.activeStep) {
      case 0:
        return (
          <CreateToDoPanel
            title={this.state.title}
            description={this.state.description}
            stepIndex={0}
            navigationHandle={this.handleNavigation}
            inputChangeHandle={this.inputChangeHandle}
          />
        );
      case 1:
        return (
          <CreateWhenToDoPanel
            stepIndex={1}
            date={this.state.date}
            navigationHandle={this.handleNavigation}
            inputChangeHandle={this.dateChangeHandle}
          />
        );
      case 2:
        return (
          <ConfirmToDoPanel
            stepIndex={2}
            navigationHandle={this.handleNavigation}
            handleSave={this.handleSaveClick}
            title={this.state.title}
            description={this.state.description}
            date={this.state.date}
          />
        );
      default:
        return <Box></Box>;
    }
  };

  handleNavigation = (stepIndex) => {
    const { state: currentState } = this;
    currentState.activeStep = stepIndex;
    this.setState(currentState);
  };

  handleSaveClick = () => {
    const { state: currentState } = this;
    const { title, description, date } = currentState;
    currentState.title = '';
    currentState.description = '';
    currentState.date = moment();
    currentState.activeStep = 0;
    this.setState(currentState, () => {
      this.props.onSave(title, description, date);
      this.props.handleClose();
    });
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        aria-labelledby="responsive-dialog-title"
        fullWidth="lg"
        maxWidth="lg"
      >
        <DialogTitle id="responsive-dialog-title">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" component="h5">
                New To Do
              </Typography>
            </Box>
            <Box>
              <Button onClick={this.props.handleClose}>
                <CloseOutlined />
              </Button>
            </Box>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Steps
            steps={['What', 'When', 'Confirm']}
            activeStep={this.state.activeStep}
          />
          <Box m={5} mt={2}>
            {this._renderPanels()}
          </Box>
        </DialogContent>
      </Dialog>
    );
  }
}
