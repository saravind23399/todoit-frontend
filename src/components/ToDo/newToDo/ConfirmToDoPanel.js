import React from 'react';
import { Box, Grid, Fab, Typography } from '@material-ui/core';
import { ArrowBack, Check } from '@material-ui/icons';
import KeyValueDisplay from '../../common/KeyValueDisplay';
export default function ConfirmToDoPanel({
  title,
  date,
  description,
  navigationHandle,
  stepIndex,
  handleSave,
}) {
  const handleBackClick = () => {
    navigationHandle(stepIndex - 1);
  };
  return (
    <Box>
      <Box mt={3} mb={3}>
        <Typography variant="h4" container="h4">
          Here's what you need to do.
        </Typography>
      </Box>
      <Grid container direction="column">
        <KeyValueDisplay keyData="Title" value={title} />
        <KeyValueDisplay keyData="Description" value={description} />
        <KeyValueDisplay keyData="Date" value={date.format('DD MMMM')} />
      </Grid>
      <Box mt={3} mb={3}>
        <Typography variant="h4" container="h4" align="right">
          Are you sure?
        </Typography>
      </Box>
      <Grid container direction="row-reverse" spacing={2}>
        <Box m={2}>
          <Fab color="primary" onClick={handleSave}>
            <Check />
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
