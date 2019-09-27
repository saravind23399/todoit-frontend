import React from 'react';
import { MenuItem, Box } from '@material-ui/core';

export default function SelectMenuItem({ children, value }) {
  return (
    <div>
      <MenuItem value={value}>
        <Box pl={1} pr={1}>
          {children}
        </Box>
      </MenuItem>
    </div>
  );
}
