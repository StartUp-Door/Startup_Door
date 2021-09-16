import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Infocard from '../../components/admin/infocard/Infocard';
// import SalesAnalytics from '../components/charts/SalesAnalytics';
import UsersPie from '../../components/admin/charts/UsersPie'
// import BarChart from '../components/analytics/Barchart'
import Memberships from '../../components/admin/charts/Memberships'

const useStyles = makeStyles(({
    root: { 
        marginTop: 110,
        marginLeft: 0, 
        textAlign: "center" 
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
            <Infocard />
            {/* <SalesAnalytics /> */}
            <div className={classes.charts}>
                <UsersPie />
                {/* <BarChart/> */}
                <Memberships />
            </div>
            
        </div>
    )
}

export default AdminHome