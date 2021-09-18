import React from 'react'
import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const useStyles = makeStyles({
    root:{
        marginTop: "30px",
        marginLeft: "0",
        marginBottom: "0",
        padding: 0,
    },
});

const data = [
    {
        name: 'January', 
        sales: 2500, 
        amt: 2400, 
    }, 
    { 
        name: 'February', 
        sales: 3000, 
        amt: 2210, 
    }, 
    { 
        name: 'March', 
        sales: 2000, 
        amt: 2290, 
    }, 
    {
        name: 'April', 
        sales: 2780, 
        amt: 2000,
    }, 
    { 
        name: 'May',
        sales: 1890,
        amt: 2181,
    },
    {
        name: 'June',
        sales: 2390,
        amt: 2500,
    },
    { 
        name: 'August',
        sales: 3490,
        amt: 2100,
    }
];

export default function SalesAnalytics() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h6" component="h2" gutterBottom color="primary">
                Services Revenue on months
            </Typography>
            <ResponsiveContainer width="100%" aspect={4/1} >
                <LineChart width={500} height={300} data={data} 
                    margin={{top: 5, right: 30, left: 20, bottom: 5,}} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}