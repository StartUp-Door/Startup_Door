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
        alignItems: "flex-start",
        marginLeft: "0",
        marginTop: 10,
        width: 1200,
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
                const negativeRatingCount = await fetch("http://localhost:5000/ratings/negativeCount");
                const count = await negativeRatingCount.json();
                const [result] = count;
                setNagativeRatings(result)

            } catch (error) {
                console.error(error.message);
            }
        }
        
        const [categories, setCategories] = useState({});
        const getCategories = async() => {
            try {
                const response = await fetch("http://localhost:5000/categoryCount");
                const [count] = await response.json()
                setCategories(count)

            } catch (error) {
                console.error(error.message);
            }
        }

        const [bidCount, setBidCount] = useState({})
        const getBidsCount = () => {
            try {
                fetch("http://localhost:5000/bidCount")
                .then(data => {
                    return data.json()
                }).then( data => setBidCount(data[0]))
                .catch(error => console.log(error))
            } catch (error) {
                console.error(error.message)
            }
        }

        useEffect( () => {
            getBidsCount();
            getAllServiceProviders();
            getAllClients();
            getNegativeRatings();
            getCategories();
        }, [])

    return (
        <Container className={classes.flexBox}>
            <Link to="/manageUsers" className={classes.linkText} >
                <CardContainer value={countProvider.users} description="No. of service providers" />
            </Link>
            <Link to="/manageUsers" className={classes.linkText}>
                <CardContainer value={countClients.users} description="No. of Registered clients" />
            </Link>
            
            <Link to="/reviewServices" className={classes.linkText}>
                <CardContainer value={countNegativeRatings.count} description="No. of Low Rated Reviews" />
            </Link>
            
            <Link to="/stats" className={classes.linkText}>
                <CardContainer value={categories.count} description="No. of Service Categories" />
            </Link>

            <Link to="/stats" className={classes.linkText}>
                <CardContainer value={bidCount.count} description="No. of Bids in active" />
            </Link>

        </Container>
    )
}