import React from 'react';
import MomentUtils from '@date-io/moment';
import { Box, Grid, Fab } from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Check, ArrowBack } from '@material-ui/icons';

export default function CreateWhenToDoPanel({ navigationHandle, stepIndex }) {
  const handleNextClick = () => {
    navigationHandle(stepIndex + 1);
  };
  const handleBackClick = () => {
    navigationHandle(stepIndex - 1);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="DD/MM/YYYY"
        margin="normal"
        id="date-picker"
        label="Pick a Date"
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      <Grid container direction="row-reverse" spacing={2}>
        <Box m={2}>
          <Fab color="primary" onClick={handleNextClick}>
            <Check></Check>
          </Fab>
        </Box>
        <Box m={2}>
          <Fab color="primary" onClick={handleBackClick}>
            <ArrowBack></ArrowBack>
          </Fab>
        </Box>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
