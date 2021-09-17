import { Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from "recharts";

export default function AllRatingsBar() {
    const [ratings, setRatings] = useState([])
  
    useEffect(() => {
        fetch('http://localhost:5000/typeCountRatings')
            .then(res => {
            return res.json()
            })
            .then(data => data.map((e) => (
            setRatings(arry => [...arry,{rate: e.rate.toString(), value: parseInt(e.count)}])
            )))
    }, [])
        console.log(ratings)
  return (
      <Paper style={{padding: 20, margin: 10}}>
          <Typography variant="h5" style={{marginBottom: 20}}> 
            Ratings Varing
          </Typography>
        <BarChart width={500} height={400} data={ratings}>
            <CartesianGrid strokeDasharray="2 3" />
                <XAxis dataKey="rate"/>
                <YAxis/>
                <Bar dataKey="value" fill="#00688B" />
            </BarChart>
      </Paper>
  );
}