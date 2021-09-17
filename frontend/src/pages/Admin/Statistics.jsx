import React from 'react'
import {makeStyles} from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Filters from '../../components/admin/charts/Filters';
import Memberships from '../../components/admin/charts/Memberships'
import UsersPie from '../../components/admin/charts/UsersPie'
import Drawer from './Drawer'
import AllRatingsBar from '../../components/admin/charts/AllRatingsBar';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    wrapper : {
        display: 'block',
        marginTop: 150
    },
    chartRow : {
        display: "flex", 
        marginTop: 10
    }
})

function Statistics() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Drawer />
            <div className={classes.wrapper}>
                <Typography variant="h5" color="primary">Registered Users</Typography>
                <Filters />
                <div className={classes.chartRow}>
                    <Memberships/> 
                    <UsersPie/>
                </div>
                <div classeName={classes.chartRow}>
                    <AllRatingsBar />
                </div>
            </div>
        </div>
        
    )
}

export default Statistics;

