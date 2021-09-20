import React from 'react';
import styles from './styles';
import Button from '@material-ui/core/Button';

const MainButton = ({ caption, color, classes }) => {
  return (
    <div className={classes.root}>
      <Button variant='contained' color={color}>
        {caption}
      </Button>
    </div>
  );
};

export default styles(MainButton);
