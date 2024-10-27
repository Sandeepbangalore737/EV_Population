import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function EVByYearChart({ data }) {
  const countsByYear = data.reduce((acc, { modelYear }) => {
    const year = +modelYear;
    if (!isNaN(year)) {
      acc[year] = (acc[year] || 0) + 1;
    }
    return acc;
  }, {});

  const chartData = Object.keys(countsByYear).map((year) => ({
    year: +year,
    count: countsByYear[year],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis
          dataKey="year"
          label={{
            value: "Year",
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
        <Line type="monotone" dataKey="count" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
