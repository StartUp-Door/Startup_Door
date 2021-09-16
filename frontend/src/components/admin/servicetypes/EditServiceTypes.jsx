import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function EditServiceTypes({ service }) {

  const [service_type, setServiceType] = useState(service.service_type);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setServiceType(service.service_type)
  };

  //   edit service type function 
  const updateServiceType = async (e) => {
    e.preventDefault();
    try {
      const body = { service_type }
      const response = await fetch(`http://localhost:5000/serviceTypes/${service.service_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      console.log(response);
      window.location = "/serviceTypes"
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="serviceType">
        <DialogTitle id={service.service_id}>Update Service : {service.service_type}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="serviceType"
            label="Service Type"
            type="text"
            fullWidth
            value={service_type}
            onChange={(e) => setServiceType(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={e => updateServiceType(e)} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}