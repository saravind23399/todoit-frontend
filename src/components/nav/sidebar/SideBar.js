import React from 'react';
import { Paper, List, Divider, Box } from '@material-ui/core';
import {
  AddCircleOutline,
  AllInclusive,
  DoneAll,
  AssignmentLate,
} from '@material-ui/icons';
import SideBarItem from './SideBarItem';

export default function SideBar({ handleNewTodo }) {
  return (
    <Paper elevation={10}>
      <Box p={1}>
        <List component="nav">
          <Box p={1}>
            <SideBarItem
              primaryText="New"
              IconComponent={AddCircleOutline}
              actionHandle={handleNewTodo}
            />
          </Box>
          <Divider />
          <Box p={1}>
            <SideBarItem primaryText="All" IconComponent={AllInclusive} />
            <SideBarItem primaryText="Completed" IconComponent={DoneAll} />
            <SideBarItem primaryText="Pending" IconComponent={AssignmentLate} />
          </Box>
        </List>
      </Box>
    </Paper>
  );
}
