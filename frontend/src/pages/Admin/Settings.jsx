import React from 'react'
import { Typography, TextField, Button, Grid, InputAdornment,InputLabel, OutlinedInput, FormControl,  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Statistics from './Statistics';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import 'date-fns';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
// import clsx from 'clsx'

const useStyles = makeStyles({
    textField: {
        margin: 50,
    }, 
    block : {
        display : "block",
        '& > *' : {
            margin: 10,
        },
    },
    row: {
        display: "flex",
        '& > *' : {
            margin: 10,
        }
    }, 
    field : {
        marginLeft : 20,
    }
});

function Settings() {
const classes = useStyles();    

const [selectedDate, setSelectedDate] = React.useState(new Date('1998-12-12'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [values, setValues] = React.useState({
    userName: 'darshana',
    userId: 'darshana1212',
    firstName: 'Darshana',
    lastName: 'Samarasinghe',
    age: 23,
    email: 'example@example.com',
    password: 'Darshana',
    rePassword : 'Darshana',
    showPassword: false,
    showRePassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  const handleClickShowRePassword = () => {
    setValues({ ...values, showRePassword: !values.showRePassword });
  }

  const handleMouseDownRePassword = (event) => {
    event.preventDefault();
  }

    return (
        <div style={{marginTop: 150}}>
            <Typography variant="h4" color="primary" style={{marginBottom: "10px"}}>
                Update your account
            </Typography> 
            <div class={classes.textField}>
                <form action={<Statistics/>} method="post" class={classes.block}>
                    <div className={classes.row}>
                        <TextField id="userName" label="User Name" variant="outlined" value={values.userName}  disabled/>
                        <TextField id="userId" label="User ID" variant="outlined" value={values.userId}  disabled/>
                    </div>

                    <div className={classes.row}>
                        <TextField id="firstName" label="First Name" variant="outlined" value={values.firstName} required/>
                        <TextField id="lastName" label="Last Name" variant="outlined" value={values.lastName} required/>
                        
                    </div>

                    <div className={classes.row}>
                        <TextField id="age" label="Age" variant="outlined" value={values.age} required/>
                        <TextField id="email" label="Email" variant="outlined" value={values.email} labelWidth={130} required/>
                    </div>
                    <div className={classes.row}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justifyContent="space-around">
                                <KeyboardDatePicker
                                    variant="outlined"
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Birth Date"
                                    format="dd/MM/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    required
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </div>

                    <div className={classes.row}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    labelWidth={70}
                                    required
                                />
                        </FormControl>
                        
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="rePassword"
                                    type={values.showRePassword ? 'text' : 'password'}
                                    value={values.rePassword}
                                    onChange={handleChange('rePassword')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle rePassword visibility"
                                        onClick={handleClickShowRePassword}
                                        onMouseDown={handleMouseDownRePassword}
                                        edge="end"
                                        >
                                        {values.showRePassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    labelWidth={130}
                                    required
                                />
                        </FormControl>
                    
                    </div>

                    <div className={classes.row}>
                        <Button variant="contained" color="primary" onClick={console.log("Hello world")}>
                            submit
                        </Button>
                        <Button variant="contained" color="secondary">
                            reset
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings;