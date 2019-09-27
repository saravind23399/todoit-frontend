import React from 'react';
import MomentUtils from '@date-io/moment';
import { Box, Grid, Fab } from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { ArrowBack } from '@material-ui/icons';
import NextFab from '../../common/NextFab';

export default function CreateWhenToDoPanel({
  inputChangeHandle,
  navigationHandle,
  stepIndex,
  date,
}) {
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
        value={date}
        onChange={inputChangeHandle}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      <Grid container direction="row-reverse" spacing={2}>
        <Box m={2}>
          <NextFab clickHandler={handleNextClick} />
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
