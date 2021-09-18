import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    borderRadius: "30px",
  },
  card: {
      width: "100%",
      height: "100%",
      borderRadius: "30px",
      backgroundColor: "primary",
  },
  flexBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "top",
    marginLeft: "20px",
    marginTop: "20px",
    width: "1200px",
    height: "fit-content",
  },
  innerText: {
      textAlign: "center",
  },
  title: {
    fontSize: 50,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function CardContainer(props) {
    const classes = useStyles();

    return (
    <CardActionArea className={classes.root}>
        <Card className={classes.card}>
            <CardContent className={classes.innerText}>
                <Typography className={classes.title} variant="h6" color="primary">
                    {props.value}
                </Typography>
                <Typography variant="body2" component="p" color="primary">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    </CardActionArea>
)}