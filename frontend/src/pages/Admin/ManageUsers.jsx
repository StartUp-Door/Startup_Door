import React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

// import DataCard from "../components/card/DataCard";

import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from "@material-ui/core";

// import { format } from 'timeago.js';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const columns = [
    { field: "id", headerName: "UID", width: 90 },
    {
        field: "username",
        headerName: "Username",
        width: 150,
        editable: true,
    },
    {
        field: "first_name",
        headerName: "First name",
        width: 150,
        editable: true,
    },
    {
        field: "last_name",
        headerName: "Last name",
        width: 150,
        editable: true,
    },
    {
        field: "birthday",
        headerName: "Birthday",
        type: "date",
        width: 130,
        editable: true,
    },
    {
        field: "email",
        headerName: "Email",
        sortable: true,
        type: "text",
        width: 200,
        editable: true,
    },
    {
        field: "service_type",
        headerName: "Role",
        width: 150,
        editable: true,
    },
    {
        field: "last_login",
        headerName: "Last login",
        editable: true,
    },
    {
        field: "phone",
        headerName: "Mobile",
        editable: true,
    },
    {
        field: "street",
        headerName: "Street",
        width: 150,
        editable: true,
    },
    {
        field: "city",
        headerName: "City",
        width: 150,
        editable: true,
    },
    {
        field: "status",
        headerName: "Status",
        editable: true,
    },
    {
        field: "register_date",
        headerName: "Registered Date",
        width: 150,
        editable: true,
    },
];

const rows = [{
    id: 1,
    username: "darshana",
    first_name: "darshana",
    last_name: "Samarasinghe",
    birthday: "1998-12-12",
    email: "darshanamsamarasinghe@gmail.com",
    user_role: "admin",
},];

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    textField: {
        margin: 10,
    }
}));

function ManageUsers() {
    const classes = useStyles()
    const [users, setUsers] = useState();

    const getAllUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/users");
            const jsonData = await response.json();

            setUsers(jsonData);
            
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getAllUsers();
        getServiceTypes();
    });

    const [open, setOpen] = React.useState(false);

    const [data, setData] = React.useState({});

    const getAllDetailsOfUser = async (id) => {
        try {
            const query = await fetch(`http://localhost:5000/users/${id}`);
            const jsonData = await query.json();
            const [details] = jsonData

            setData(details);
            // console.log(data)

        } catch (error) {
            console.error(error.message)
        }
    }

    const [state, setState] = useState(data.status)

    const handleStatusChange = (event) => {
        setState(event.target.value)
    }

    const [service, setService] = useState([])

    const getServiceTypes = async () => {
        try {
            const response = await fetch("http://localhost:5000/serviceTypes");
            const jsonData = await response.json()

            setService(jsonData);
            // console.log(service);
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getServiceTypes();
    }, [])

    const [serviceId, setServiceId] = useState();

    const handleCategoryChange = (event) => {
        setServiceId(event.target.value);
    }

    // --------------------------------Update user details---------------------------------
    const updateUserDetails = async (event) => {
        // event.preventDefault();
        try {
            const body = { data }
            const response = await fetch(`http://localhost:5000/users/${data.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(response)
            window.location = "/manageUsers"
        } catch (error) {
            console.error(error.message)
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <div style={{ height: 600, width: "100%", marginTop: 150, marginRight: 50 }}>
            <DataGrid columns={columns}
                rows={users ? users : rows}
                pageSize={10}
                // checkboxSelection
                onRowDoubleClick={(params) => {
                        getAllDetailsOfUser(params.row.id);
                        handleClickOpen();
                }}
            />
            <Dialog open={open} onClose={handleClose} aria-labelledby="Update-user-details">
                <DialogTitle id="update-user-title">
                    Details of the User : {data.username}
                </DialogTitle>
                <DialogContent>
                    <TextField size="small" variant="outlined" label="User ID" value={data.id} disabled className={classes.textField} />
                    <TextField size="small" variant="outlined" label="Username" value={data.username} disabled className={classes.textField} />
                    <TextField size="small" variant="outlined" label="First Name" value={data.first_name} disabled className={classes.textField} />
                    <TextField size="small" variant="outlined" label="Last Name" value={data.last_name} disabled className={classes.textField} />
                    <TextField size="small" variant="outlined" label="Email" value={data.email} disabled className={classes.textField} />
                    <TextField size="small" variant="outlined" label="Birthday" value={data.birthday} disabled className={classes.textField} />

                    {/* <TextField size="small" variant="outlined" label="User Role" value={data.service_type} disabled className={classes.textField} /> */}

                    <div className={classes.textField}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="category">Category</InputLabel>

                            <Select
                                className={classes.textField}
                                labelId="Category"
                                id="category"
                                value={serviceId}
                                onChange={handleCategoryChange}
                            >

                                {service.map((element) => (
                                    <MenuItem value={element.service_id}>{element.service_type}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel id="status">Status</InputLabel>
                            <Select
                                className={classes.textField}
                                labelId="status"
                                id="status-id"
                                value={data.status}
                                onChange={handleStatusChange}
                            >
                                <MenuItem value={state}>{state ? "True" : "False"}</MenuItem>
                                <MenuItem value={state ? false : true}>{state ? "False" : "True"}</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <DialogContent variant="h3">
                        Address
                    </DialogContent>
                    <TextField size="small" variant="outlined" label="Street" value={data.street} disabled className={classes.textField} />
                    <TextField size="small" variant="outlined" label="City" value={data.city} disabled className={classes.textField} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => { updateUserDetails(data.id) }} color="primary">
                        Update Details
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default ManageUsers;