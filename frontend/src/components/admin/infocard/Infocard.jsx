import React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import CardContainer from "./CardContainer";
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    flexBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "top",
        marginLeft: "0",
        marginTop: "20px",
        width: "1200px",
        height: "fit-content",
    }, 
    linkText: {
        textDecoration : "none",
        color: "inherit",
    }
});

export default function Infocard() {
        const classes = useStyles();
        const [countProvider , setCountProvider] = useState({});

        const getAllServiceProviders = async() => {
            try {
                const allServiceProviders = await fetch("http://localhost:5000/stats/users/services");
                const count = await allServiceProviders.json();
                const [result] = count;
                setCountProvider(result)

            } catch (error) {
                console.error(error.message);
            }
        }

        const [countClients , setCountClients] = useState({});

        const getAllClients = async() => {
            try {
                const allClients = await fetch("http://localhost:5000/stats/users/clients");
                const count = await allClients.json();
                const [result] = count;
                setCountClients(result)

            } catch (error) {
                console.error(error.message);
            }
        }

        const [countNegativeRatings , setNagativeRatings] = useState({});

        const getNegativeRatings  = async() => {
            try {
                const negativeRatingCount = await fetch("http://localhost:5000/ratings");
                const count = await negativeRatingCount.json();
                const [result] = count;
                setNagativeRatings(result)

            } catch (error) {
                console.error(error.message);
            }
        }

        useEffect( () => {
            getAllServiceProviders();
            getAllClients();
            getNegativeRatings();
        })

    return (
        <Container className={classes.flexBox}>
            <Link to="/manageUsers" className={classes.linkText} >
                <CardContainer value={countProvider.users} description="Total number of Service providers registered in the system." />
            </Link>
            <Link to="/manageUsers" className={classes.linkText}>
                <CardContainer value={countClients.users} description="Total Clients registered in the system." />
            </Link>
            
            <Link to="/reviewServices" className={classes.linkText}>
                <CardContainer value={countNegativeRatings.count} description="Low rated reviews on among all services" />
            </Link>
            
            <Link to="stats" className={classes.linkText}>
                <CardContainer value="Rs.XXXX" description="Total money tranferred through the system." />
            </Link>
            
        </Container>
    )
}