import React, {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MerchantReviewCard({ id, name, description, date, updateFunc, deleteFunc}) {
  const classes = useStyles();

  const [status, setstatus] = useState(updateFunc.status);

  const updatePortfolio = async(event) => {
    event.preventDefault()
    try {
        const body = {status}
        const response = await fetch(`http://localhost:5000/portfolio/${updateFunc.p_id}`, {
            method: 'PUT', 
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(body)
        });
        console.log(response);
        window.location = '/techApprovals';
        if(response){
          console.log("approved the portfolio")
        }
    } catch (error) {
        console.error(error.message)
    }
  }

  const updateButtonClick = (e) => {
    setTimeout(()=>{
      setstatus(!updateFunc.status);
      updatePortfolio(e);
    }, 1000);
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image="./image/logo.png"
        title="a photo"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary" onClick={(e) => {updateButtonClick(e)}}>
          Approve
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => {deleteFunc()}}>
          Reject
        </Button>
      </CardActions>
    </Card>
  );
}