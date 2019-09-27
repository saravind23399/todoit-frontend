import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  Paper,
  Grid,
  Box,
  InputLabel,
} from '@material-ui/core';

import {
  ExpandMore,
  NewReleasesOutlined,
  AssignmentLate,
  DoneAll,
  PlayCircleFilled,
} from '@material-ui/icons';
import StageSelect from './StageSelect';

export default function ToDoCard({
  cardId,
  title,
  description,
  date,
  status,
  handleStatusChange,
}) {
  const handleSelectChange = (e) => {
    handleStatusChange(cardId, e.target.value);
  };

  const _renderIcon = () => {
    switch (status) {
      case 'ToDo':
        return <NewReleasesOutlined />;
      case 'Stalled':
        return <AssignmentLate />;
      case 'In Progress':
        return <PlayCircleFilled />;
      case 'Completed':
        return <DoneAll />;
      default:
        return <Box />;
    }
  };

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
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item>{_renderIcon()}</Grid>
                <Grid item>
                  <Typography component="h5" variant="h5">
                    {title}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item></Grid>
            <Grid item>
              <Typography color="textSecondary" variant="subtitle1">
                {date.format('DD MMMM ')}
              </Typography>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Box mt={3}>
                <Typography paragraph>{description}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box mb={1}>
                <InputLabel>
                  <Typography container="h6" variant="h6">
                    Stage
                  </Typography>
                </InputLabel>
              </Box>
              <StageSelect
                status={status}
                handleSelectChange={handleSelectChange}
              />
            </Grid>
            <Grid item></Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
}
