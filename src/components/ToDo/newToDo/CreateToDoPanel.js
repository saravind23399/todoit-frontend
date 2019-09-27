import React from 'react';
import { TextField, Box, Fab, Grid } from '@material-ui/core';
import { Check } from '@material-ui/icons';

export default function CreateToDoPanel({ navigationHandle, stepIndex }) {
  const handleNextClick = () => {
    navigationHandle(stepIndex + 1);
  };

  return (
    <Box>
      <TextField
        id="txtTitle"
        label="Title"
        margin="normal"
        variant="outlined"
        fullWidth
      ></TextField>
      <TextField
        id="txtDescription"
        label="Description"
        margin="normal"
        variant="outlined"
        fullWidth
        multiline
        rowsMax={6}
      ></TextField>
      <Grid container direction="row-reverse">
        <Box m={2}>
          <Fab color="primary" onClick={handleNextClick}>
            <Check></Check>
          </Fab>
        </Box>
      </Grid>
    </Box>
  );
}
