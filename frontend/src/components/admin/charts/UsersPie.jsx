import { Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({
  root : {
    margin: 10
  },
  heading: {
      marginBottom: 20,
      textAlign: 'center',
      paddingTop: 20
  },
  chartWrapper: {
      paddingRight: 30,
      justifyContent: 'space-evenly'
  }
}))
const COLORS = ["#00688B", "#0BB5FF	", "#507786", "	#0099CC", "#8DB6CD", "#6CA6CD"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function UsersPie() {
  const classes = useStyles();
  const [providers, setProviders] = useState([])
  
  useEffect(() => {
      fetch('http://localhost:5000/stats/users/providers')
        .then(res => {
          return res.json()
        })
        .then(data => data.map((e) => (
          setProviders(arry => [...arry,{name: e.name, value: parseInt(e.value)}])
        )))
  }, [])
  // console.log(providers);

  return (
    <Paper className={classes.root} >
      <Typography variant="h6" className={classes.heading}>
        Service Providers
      </Typography>
      <div className={classes.chartWrapper} >
        <PieChart width={300} height={300}>
          <Pie
            data={providers}
            cx={160}
            cy={100}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {providers.map((element, index) => (
              <Cell key={element.name} fill={COLORS[index % COLORS.length]}/>
            ))}
          </Pie>
          <Legend/>
        </PieChart>
      </div>
    </Paper>
  );
}
