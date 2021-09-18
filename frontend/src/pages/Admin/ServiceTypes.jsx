import React from 'react'

import CreateService from '../../components/admin/servicetypes/CreateService';
import ShowServices from '../../components/admin/servicetypes/ShowServices';
import Drawer from './Drawer'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(({
    root: {
        display: 'flex',
    }, 
    content: {
        display: 'block',
        marginTop: 120,
        justifyContent: 'center',
        width: '75%',
    }
}))
function ServiceTypes() {
    const classes = useStyles()
    return ( 
    <div className={classes.root} >
        <Drawer />
        <div className={classes.content}>
            <CreateService/>
            <ShowServices/>        
        </div>
    </div>
    )
}

export default ServiceTypes