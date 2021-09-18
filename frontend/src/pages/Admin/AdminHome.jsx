import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Infocard from '../../components/admin/infocard/Infocard';
// import SalesAnalytics from '../components/charts/SalesAnalytics';
import UsersPie from '../../components/admin/charts/UsersPie'
// import BarChart from '../components/analytics/Barchart'
import Memberships from '../../components/admin/charts/Memberships'
import Drawer from './Drawer'
import AllRatingsBar from '../../components/admin/charts/AllRatingsBar';

const useStyles = makeStyles(({
    root: { 
        display: 'flex', 
    },
    content: {
        display: 'block',
        marginTop: 120
    },
    charts : {
        display: "flex", 
        flexDirection: "row", 
        marginTop: 30, 
        marginLeft: 30, 
        justifyContent: "space-evenly"
    }
}))

function AdminHome() {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <Drawer />
            <div className={classes.content}>
                <Infocard />
                <div className={classes.charts}>
                    <UsersPie />
                    <Memberships />
                    <AllRatingsBar/>
                </div>
            </div>
        </div>
    )
}

export default AdminHome