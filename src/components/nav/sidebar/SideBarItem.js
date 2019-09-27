import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
} from '@material-ui/core';

export default function SideBarItem({
  actionHandle,
  IconComponent,
  primaryText,
}) {
  return (
    <ListItem button onClick={actionHandle}>
      <ListItemIcon>
        <IconComponent />
      </ListItemIcon>
      <Hidden mdDown>
        <ListItemText primary={primaryText} />
      </Hidden>
    </ListItem>
  );
}
