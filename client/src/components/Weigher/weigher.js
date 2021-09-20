import React, { useState, useCallback } from 'react';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function Weigher({
  classes,
  weighers,
  addWeigher,
  sumweights,
  deleteWeighers,
}) {
  const getRandomInRange = useCallback(
    (e) => {
      const weight = Math.floor(Math.random() * (2000 - 10 + 1)) + 10;
      addWeigher({ weight });
    },
    [addWeigher]
  );

  return (
    <Grid
      m={8}
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item md={6} sm={8} xs={10}>
        <h1>Punnitus</h1>
        <Grid container direction='column' spacing={5}>
          <Grid item>
            <h3>Nykyinen</h3>
            <TextField
              id='fldWeight'
              value={
                (weighers &&
                  weighers.length &&
                  weighers[weighers.length - 1].weight) + ' kg'
              }
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item>
            <h3>&sum;</h3>
            <TextField
              id='fldSumWeight'
              value={`${sumweights} kg`}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item>
            <Box className={classes.root}>
              <Button
                variant='contained'
                color='primary'
                onClick={() => getRandomInRange()}
              >
                Punnitse
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => deleteWeighers()}
              >
                Nollaa
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default styles(Weigher);
