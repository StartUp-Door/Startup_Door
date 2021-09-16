import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    tableWrapper: {
        marginTop: 150,
        marginRight : 50,
    },
    table: {
    minWidth: 650,
  },
});

export default function ReviewServices() {
  const classes = useStyles();

  const [ratings, setRatings] = useState([]);
  const getAllRatings = async() => {
    try {
        const response = await fetch("http://localhost:5000/ratings");
        const jsonData = await response.json()

        setRatings(jsonData);

    } catch (error) {
        console.error(error.message)
    }
}

useEffect( () => { 
    getAllRatings();
}, []);

  return (
    <TableContainer className={classes.tableWrapper} component={Paper}>
      <Table className={classes.table} aria-label="review ratings table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Name of Provider</TableCell>
            <TableCell align="center">Comment</TableCell>
            <TableCell align="center">Value</TableCell>
            <TableCell align="center">Client Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ratings.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.service_name}</TableCell>
              <TableCell align="center">{row.comment}</TableCell>
              <TableCell align="center">{row.value}</TableCell>
              <TableCell align="center">{row.client_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}