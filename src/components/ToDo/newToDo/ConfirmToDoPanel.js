import React from 'react';
import { Box, Grid, Fab } from '@material-ui/core';
import { SaveRounded, ArrowBack } from '@material-ui/icons';

export default function ConfirmToDoPanel({ navigationHandle, stepIndex }) {
  const handleBackClick = () => {
    navigationHandle(stepIndex - 1);
  };
  return (
    <Box>
      <Grid container direction="row-reverse" spacing={2}>
        <Box m={2}>
          <Fab color="primary">
            <SaveRounded></SaveRounded>
          </Fab>
        </Box>
        <Box m={2}>
          <Fab color="primary" onClick={handleBackClick}>
            <ArrowBack></ArrowBack>
          </Fab>
        </Box>
      </Grid>
    </Box>
  );
}
