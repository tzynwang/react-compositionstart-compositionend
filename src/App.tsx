import React, { memo } from 'react';
import Grid from '@mui/material/Grid';
import Input1 from './Input1';
import Input2 from './Input2';

function App(): React.ReactElement {
  /* Main */
  return (
    <div className="App">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10} md={8} lg={6}>
          <Input1 />
        </Grid>
        <Grid item xs={10} md={8} lg={6}>
          <Input2 />
        </Grid>
      </Grid>
    </div>
  );
}

export default memo(App);
