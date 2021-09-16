import React from 'react'
import { makeStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    title : {
        textAlign: "center",
        paddingBottom: "20px",
    },
    formControl: {
        margin: "30px",
        minWidth: 150,
    },
});
function Filters() {
    const classes = useStyles();
    const [serviceType, setServiceType] = React.useState('');
    const handleServiceType = (event) => {
        setServiceType(event.target.value);
    };

    const [month, setMonth] = React.useState('');
    const handleChangeOnMonth = (event) => {
        setMonth(event.target.value)
    }

    const [serviceArea, setArea] = React.useState('');
    const handleChangeOnArea = (event) => {
        setArea(event.target.value)
    }
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="month">Month</InputLabel>
                <Select
                    labelId="month"
                    id="month"
                    value={month}
                    onChange={handleChangeOnMonth}
                >
                    <MenuItem value="January">January</MenuItem>
                    <MenuItem value="February">February</MenuItem>
                    <MenuItem value="March">March</MenuItem>
                    <MenuItem value="April">April</MenuItem>
                    <MenuItem value="May">May</MenuItem>
                    <MenuItem value="June">June</MenuItem>
                    <MenuItem value="July">July</MenuItem>
                    <MenuItem value="August">August</MenuItem>
                    <MenuItem value="September">September</MenuItem>
                    <MenuItem value="October">October</MenuItem>
                    <MenuItem value="November">November</MenuItem>
                    <MenuItem value="December">December</MenuItem>
                </Select>
                <FormHelperText>Select the month</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="service-type">Service Type</InputLabel>
                <Select
                    labelId="service-type"
                    id="service-type"
                    value={serviceType}
                    onChange={handleServiceType}
                >
                    <MenuItem value="technician">Technician</MenuItem>
                    <MenuItem value="foodCaterer">Food Caterer</MenuItem>
                    <MenuItem value="plants">Plants and Crops</MenuItem>
                    <MenuItem value="Clients">Clients</MenuItem>
                </Select>
                <FormHelperText>Select the Service type</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="area">Service Area</InputLabel>
                <Select
                    labelId="area"
                    id="area"
                    value={serviceArea}
                    onChange={handleChangeOnArea}
                >
                    <MenuItem value="colombo">Colombo</MenuItem>
                    <MenuItem value="nugegoda">Nugegoda</MenuItem>
                    <MenuItem value="papiliyana">Papiliyana</MenuItem>
                    <MenuItem value="townhall">Townhall</MenuItem>
                </Select>
                <FormHelperText>Select the Service Area</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="area">Service Area</InputLabel>
                <Select
                    labelId="area"
                    id="area"
                    value={serviceArea}
                    onChange={handleChangeOnArea}
                >
                    <MenuItem value="colombo">Colombo</MenuItem>
                    <MenuItem value="nugegoda">Nugegoda</MenuItem>
                    <MenuItem value="papiliyana">Papiliyana</MenuItem>
                    <MenuItem value="townhall">Townhall</MenuItem>
                </Select>
                <FormHelperText>Select the Service Area</FormHelperText>
            </FormControl>
        </div>
    )
}

export default Filters
