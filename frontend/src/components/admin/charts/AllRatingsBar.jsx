import { Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from "recharts";
import {makeStyles} from '@material-ui/core'

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
export default function AllRatingsBar() {
    const classes = useStyles();
    const [ratings, setRatings] = useState([])
  
    useEffect(() => {
        fetch('http://localhost:5000/typeCountRatings')
            .then(res => {
            return res.json()
            })
            .then(data => data.map((e) => (
            setRatings(arry => [...arry,{rate: e.rate.toString(), value: parseInt(e.count)}])
            )))
    }, [])

  return (
        <Paper className={classes.root}>
            <Typography variant="h6" className={classes.heading}> 
                Ratings Varing
            </Typography>
            <div className={classes.chartWrapper} >
                <BarChart width={300} height={300} data={ratings}>
                    <CartesianGrid strokeDasharray="2 3" />
                    <XAxis dataKey="rate"/>
                    <YAxis/>
                    <Bar dataKey="value" fill="#00688B" />
                </BarChart>
            </div> 
        </Paper>
  );
}