import { Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from "recharts";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({
  root : {
    margin: 10
  },
  heading: {
      marginBottom: 20,
      textAlign: 'center',
      paddingTop: 20
  },
  chartWrapper: {
      paddingRight: 30,
      justifyContent: 'space-evenly'
  }
}))

export default function App() {
    const classes = useStyles();
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/stats/users/memberships")
        .then (response => {return response.json()})
        .then(data => {
            data.map((e) => (
            setMembers(arr => [...arr,{name: e.name, value: parseInt(e.value)}])
          ))
        })
        },[])
        
  return (
      <Paper className={classes.root}>
          <Typography variant="h6" className={classes.heading}> 
            Memberships
          </Typography>
          <div className={classes.chartWrapper} >
            <BarChart width={300} height={300} data={members}>
                <CartesianGrid strokeDasharray="2 3" />
                <XAxis dataKey="name"/>
                <YAxis/>
                <Bar dataKey="value" fill="#009ACD" />
            </BarChart>
          </div>
      </Paper>
  );
}