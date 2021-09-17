import { Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from "recharts";

export default function App() {
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/stats/users/memberships")
        .then (response => {return response.json()})
        .then(data => {
            data.map((e) => (
            setMembers(arr => [...arr,{name: e.name, value: parseInt(e.value)}])
          ))
        })
        },[])
        
  return (
      <Paper>
          <Typography variant="h5" style={{marginBottom: 20}}> 
            Memberships
          </Typography>
        <BarChart width={500} height={400} data={members}>
            <CartesianGrid strokeDasharray="2 3" />
                <XAxis dataKey="name"/>
                <YAxis/>
                <Bar dataKey="value" fill="#009ACD" />
            <Tooltip/>
            </BarChart>
      </Paper>
  );
}