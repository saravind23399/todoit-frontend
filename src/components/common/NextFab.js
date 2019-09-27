import React from 'react';
import { Fab } from '@material-ui/core';
import { Check } from '@material-ui/icons';

export default function NextFab({ clickHandler }) {
  return (
    <Fab color="primary" onClick={clickHandler}>
      <Check></Check>
    </Fab>
  );
}
