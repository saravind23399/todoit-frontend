import React from 'react';
import { Paper, List, Divider, Box } from '@material-ui/core';
import {
  AddCircleOutline,
  AllInclusive,
  DoneAll,
  AssignmentLate,
  PlayCircleFilled,
  NewReleasesOutlined,
} from '@material-ui/icons';
import SideBarItem from './SideBarItem';

export default function SideBar({ handleMenuClick }) {
  return (
    <Paper elevation={10}>
      <Box p={1}>
        <List component="nav">
          <Box p={1}>
            <SideBarItem
              primaryText="New"
              IconComponent={AddCircleOutline}
              actionHandle={() => handleMenuClick('NEW_TODO')}
            />
          </Box>
          <Divider />
          <Box p={1}>
            <SideBarItem
              primaryText="All"
              IconComponent={AllInclusive}
              actionHandle={() => handleMenuClick('ALL_TODOS')}
            />
            <SideBarItem
              primaryText="Completed"
              IconComponent={DoneAll}
              actionHandle={() => handleMenuClick('COMPLETED')}
            />
            <SideBarItem
              primaryText="Stalled"
              IconComponent={AssignmentLate}
              actionHandle={() => handleMenuClick('STALLED')}
            />
            <SideBarItem
              primaryText="In Progress"
              IconComponent={PlayCircleFilled}
              actionHandle={() => handleMenuClick('IN_PROGRESS')}
            />
            <SideBarItem
              primaryText="To Do"
              IconComponent={NewReleasesOutlined}
              actionHandle={() => handleMenuClick('TO_DO')}
            />
          </Box>
        </List>
      </Box>
    </Paper>
  );
}
