import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainTabs from './MainTabs';

export default function Main() {
  return (
    <>
      <Grid
        m={8}
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={6}>
          <MainTabs />
        </Grid>
      </Grid>
    </>
  );
}
