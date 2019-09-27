import React from 'react';
import { TextField, Box, Grid } from '@material-ui/core';
import NextFab from '../../common/NextFab';

export default function CreateToDoPanel({
  navigationHandle,
  stepIndex,
  inputChangeHandle,
  title,
  description,
}) {
  const handleNextClick = () => {
    navigationHandle(stepIndex + 1);
  };

  return (
    <Box>
      <TextField
        id="title"
        label="Title"
        margin="normal"
        variant="outlined"
        value={title}
        fullWidth
        onChange={inputChangeHandle}
      ></TextField>
      <TextField
        id="description"
        label="Description"
        margin="normal"
        variant="outlined"
        value={description}
        fullWidth
        multiline
        rowsMax={6}
        onChange={inputChangeHandle}
      ></TextField>
      <Grid container direction="row-reverse">
        <Box m={2}>
          <NextFab clickHandler={handleNextClick} />
        </Box>
      </Grid>
    </Box>
  );
}
