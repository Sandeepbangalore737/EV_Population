import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function EVRangeChart({ data }) {
  const countsByRange = data.reduce((acc, { electricRange }) => {
    acc[electricRange] = (acc[electricRange] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(countsByRange).map((electricRange) => ({
    name: electricRange,
    count: countsByRange[electricRange],
  }));

  return (
    <ResponsiveContainer width="96%" height={250}>
      <BarChart data={chartData}>
        <XAxis
          dataKey="name"
          label={{
            value: "Range",
            position: "insideBottom",
            offset: 10,
            dy: 13,
          }}
        />
        <YAxis
          label={{
            value: "EV Count",
            angle: -90,
            position: "insideLeft",
            dx: -5,
            dy: 10,
          }}
        />
        <Tooltip />
        <Bar dataKey="count" fill="#4caf50" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default EVRangeChart;
