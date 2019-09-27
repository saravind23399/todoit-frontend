import React from 'react';
import { FormControl, MenuItem, Box, Select } from '@material-ui/core';

export default function StageSelect({ status, handleSelectChange }) {
  return (
    <FormControl variant="outlined" fullWidth={true}>
      <Select value={status} autoWidth={true} onChange={handleSelectChange}>
        <MenuItem value="ToDo">
          <Box pl={1} pr={1}>
            ToDo
          </Box>
        </MenuItem>
        <MenuItem value="In Progress">
          <Box pl={1} pr={1}>
            In Progress
          </Box>
        </MenuItem>
        <MenuItem value="Stalled">
          <Box pl={1} pr={1}>
            Stalled
          </Box>
        </MenuItem>
        <MenuItem value="Completed">
          <Box pl={1} pr={1}>
            Completed
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
