import React, { useEffect } from 'react';
import styles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

function ListWeighers({ classes, weighers, getWeighers }) {
  useEffect(() => {
    getWeighers();
  }, [getWeighers]);

  if (!weighers) {
    return <h1>WAIT!</h1>;
  }

  return (
    <>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='table'>
          <TableHead>
            <TableRow>
              <TableCell>Päivämäärä</TableCell>
              <TableCell>Paino</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {weighers.map((weigher) => (
              <TableRow key={weigher.id}>
                <TableCell>{weigher.date}</TableCell>
                <TableCell>{weigher.weight} kg</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant='contained' color='primary'>
        Järjestä
      </Button>
    </>
  );
}

export default styles(ListWeighers);
