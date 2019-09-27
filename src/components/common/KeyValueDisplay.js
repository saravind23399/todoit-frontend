import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default function KeyValueDisplay({ keyData, value }) {
  return (
    <Grid container direction="row" justify="space-around">
      <Grid item xs={12} md={3}>
        <Typography container="h6" variant="h6">
          {keyData}
        </Typography>
      </Grid>
      <Grid item xs={12} md={9}>
        <Typography paragram>{value}</Typography>
      </Grid>
    </Grid>
  );
}
