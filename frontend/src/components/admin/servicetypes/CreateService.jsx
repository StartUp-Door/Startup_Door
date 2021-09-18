import React,{useState} from 'react'
import { Button, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export default function CreateService() {
    
    const [service_type, setServiceType] = useState("");
    const [isValid, setIsValid] = useState(''); 

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            if(service_type !== "") {
                const body = { service_type };
                const response = await fetch("http://localhost:5000/serviceTypes", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });

                if(response) {
                    // alert(`Successfully added Service:${body.service_type}`);
                    setIsValid(true);
                    window.location = '/serviceTypes';
                } else {
                    console.error(response.error);
                    setIsValid(false);
                }
            } else {
                // <Alert severity="error">Service type can't be empty</Alert>
                alert("Service type can't be empty");
                setIsValid(false);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <form style = {{display: "flex", width: "100%"}} onSubmit={onSubmitForm} >
                <TextField 
                    id = "add-service-type"
                    label = "Service type"
                    variant = "outlined"
                    value = { service_type }
                    onChange = { e => setServiceType(e.target.value) }
                    style = {{width: "75%", marginRight: "4%"}}
                /> 
                <Button type="submit" variant = "outlined" color = "primary" style = {{ width: "20%" }} >
                    Add service  
                </Button> 
            </form>
            {isValid ? <Alert severity="success">Successfully added service</Alert> : <Alert severity="error">Error in adding service</Alert>}
            
        </div>
    )
}
