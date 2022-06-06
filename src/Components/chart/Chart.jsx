import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "../../assets/css/chart.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
/**import "../../assets/css/chart.css"; */
const data = [
   { name: "Janvier", Total:1200},
   { name: "Février", Total:2100},
   { name: "Mars", Total:800},
   { name: "Avril", Total:1600},
   { name: "Mai", Total:900},
   { name: "Juin", Total:1700},
  ];
  
const Chart = () => {
  return (
    <div className="chart">
        <div className="top">
     <h1 className="title">Les derniers 6 mois (Revenu)</h1>
     <MoreVertIcon fontSize="small"/>
    </div>
      
      <div>
        <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  
  </defs>
  <XAxis dataKey="name" />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
      </ResponsiveContainer>
      
      </div>
    </div>
  )
}

export default Chart