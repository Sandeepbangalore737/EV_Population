import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function EVByMakeChart({ data }) {
  const countsByMake = data.reduce((acc, { make }) => {
    acc[make] = (acc[make] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(countsByMake).map((make) => ({
    name: make,
    count: countsByMake[make],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <XAxis
          dataKey="name"
          label={{
            value: "Companies",
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
            offset: 0,
          }}
        />
        <Tooltip />
        <Bar dataKey="count" fill="#1976d2" />
      </BarChart>
    </ResponsiveContainer>
  );
}
