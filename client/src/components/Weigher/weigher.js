import React, { useState, useCallback } from 'react';
import styles from './styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Weigher({ classes, addWeigher, deleteWeighers }) {
  const [weight, setWeight] = useState(0);

  const getRandomInRange = useCallback(
    (e) => {
      setWeight(Math.floor(Math.random() * (2000 - 10 + 1)) + 10);
    },
    [weight]
    //addWeigher({ weight })
  );

  return (
    <>
      <TextField
        id='fldWeight'
        defaultValue='0 kg'
        value={weight}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        id='fldSumWeight'
        defaultValue='&sum;: 0 kg'
        InputProps={{
          readOnly: true,
        }}
      />
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
    </>
  );
}

export default styles(Weigher);
