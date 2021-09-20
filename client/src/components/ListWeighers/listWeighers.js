import React, { useEffect } from 'react';
import styles from './styles';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function ListWeighers({
  classes,
  weighers,
  orderField,
  changeOrderField,
  getWeighers,
}) {
  useEffect(() => {
    getWeighers();
  }, [getWeighers]);

  if (!weighers) {
    return <h1>WAIT!</h1>;
  }

  return (
    <Grid
      m={8}
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item md={6} sm={8} xs={10}>
        <h1>Punnitushistoria</h1>
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
                  <TableCell>
                    {moment(weigher.date).format('D.M.YYYY HH:mm')}
                  </TableCell>
                  <TableCell>{weigher.weight} kg</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} mb={3}>
          <Button
            onClick={() => {
              changeOrderField(orderField === 'date' ? 'weight' : 'date');
            }}
            variant='contained'
            color='primary'
          >
            Järjestä {orderField}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default styles(ListWeighers);
