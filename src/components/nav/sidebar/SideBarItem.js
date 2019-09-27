import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

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
      <ListItemText primary={primaryText} />
    </ListItem>
  );
}
