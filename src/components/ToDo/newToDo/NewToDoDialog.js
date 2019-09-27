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

export default class NewToDoDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
    };
  }
  _renderPanels = () => {
    switch (this.state.activeStep) {
      case 0:
        return (
          <CreateToDoPanel
            stepIndex={0}
            navigationHandle={this.handleNavigation}
          />
        );
      case 1:
        return (
          <CreateWhenToDoPanel
            stepIndex={1}
            navigationHandle={this.handleNavigation}
          />
        );
      case 2:
        return (
          <ConfirmToDoPanel
            stepIndex={2}
            navigationHandle={this.handleNavigation}
            handleSave={this.handleSaveClick}
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

  handleSaveClick = (nextPage) => {};

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
