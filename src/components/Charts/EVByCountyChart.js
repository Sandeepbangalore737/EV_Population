import { Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function EVByCountyChart({ data }) {
  const countsByCounty = data.reduce((acc, { county }) => {
    acc[county] = (acc[county] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(countsByCounty).map(county => ({ name: county, count: countsByCounty[county] }));

  return (
    <ResponsiveContainer width="100%" height={300} >
      <BarChart data={chartData} >
        <XAxis 
          dataKey="name" 
          label={{ value: "Country", position: "insideBottom", offset: 10, dy: 13,  }} 
        />
        <YAxis 
          label={{ value: "EV Count", angle: -90, position: "insideLeft", dx: -5, dy: 10 }} 
        />
        <Tooltip />
        <Bar dataKey="count" fill="#1976d2" />
      </BarChart>
    </ResponsiveContainer>
  );
}
