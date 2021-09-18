import React from 'react'
import Card from '../../components/admin/card/Card'
import Drawer from './Drawer'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(({
    root: {
        display: 'flex'
    },
    content: {
        display: 'bolck',
        marginTop: 120,
    }, 
    cardRow: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}))
function Approvals() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Drawer />
            <div className={classes.content}>
                <div className={classes.cardRow} >
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
        
    )
}

export default Approvals
