import React from 'react'
import {makeStyles} from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Filters from '../components/analytics/Filters';
import Memberships from '../components/analytics/Memberships'
import UsersPie from '../components/analytics/UsersPie'

const useStyles = makeStyles({
    wrapper : {
        marginTop: 150,
    },
})

function Statistics() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Typography variant="h5" color="primary">Registered Users</Typography>
            <Filters />
            <div style={{display: "flex", marginTop: "10px",}}>
                <Memberships/> 
                <UsersPie/>
            </div>
        </div>
    )
}

export default Statistics;

