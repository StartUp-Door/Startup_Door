import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

import EditServiceTypes from './EditServiceTypes';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableWrapper: {
        marginTop: 40
    }
});

function ShowServices() {
    const classes = useStyles();

    const [service_type, setServiceType] = useState([]);

    // delete service function
    const deleteServiceType = async(id) => {
        try {
            const deleteService = await fetch(`http://localhost:5000/serviceTypes/${id}`, {
                method: "DELETE", 
             });
            
            setServiceType(service_type.filter(service => service.service_id !== id))
            console.log(deleteService ? "deleted the service" : "error in delete");
        } catch (error) {
            console.error(error.message);
        }
    };

    const getServiceTypes = async() => {
        try {
            const response = await fetch("http://localhost:5000/serviceTypes");
            const jsonData = await response.json()

            setServiceType(jsonData);
            console.log(response.bodyUsed);
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect( () => { 
        getServiceTypes()
    }, []);

    return (
        <div>
            <TableContainer component = {Paper} className = { classes.tableWrapper } >
            <Table  aria-label = "service-types" className={classes.table}>
                <TableHead >
                    <TableRow >
                        <TableCell align = "center" > Service ID </TableCell> 
                        <TableCell align = "center" > Service Type </TableCell> 
                        <TableCell align = "center" > Update </TableCell> 
                        <TableCell align = "center" > Delete </TableCell> 
                    </TableRow >  
                </TableHead> 
                <TableBody >
                    {service_type.map( service => (

                        <TableRow key = {service.service_id} >
                            <TableCell component = "th" scope = "row" align = "center" >
                                   {service.service_id} 
                            </TableCell>    
                            <TableCell align = "center" > 
                                {service.service_type}
                            </TableCell> 
                            <TableCell align = "center" >
                                <EditServiceTypes service= {service}/>
                            </TableCell>  
                            <TableCell align = "center" >
                                <Button 
                                    variant = "contained" 
                                    color="secondary" 
                                    onClick = {() => deleteServiceType(service.service_id)}
                                    // onClick = {console.log("clicked delete button")}
                                >
                                    DELETE 
                                </Button>  
                            </TableCell > 
                        </TableRow> 

                    ))}
                </TableBody > 
            </Table> 
        </TableContainer > 
        </div>
    )
}

export default ShowServices
