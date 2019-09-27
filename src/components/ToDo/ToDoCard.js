import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  Paper,
  Grid,
} from '@material-ui/core';
import moment from 'moment';
import { ExpandMore } from '@material-ui/icons';
export default function ToDoCard({ title, description, date, status }) {
  return (
    <Paper elevation={5}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography component="h5" variant="h5">
                {title}
              </Typography>
            </Grid>
            <Grid item></Grid>
            <Grid item>
              <Typography color="textSecondary" variant="subtitle1">
                {moment(date).format('DD MMMM ')}
              </Typography>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography paragraph>{description}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
}
