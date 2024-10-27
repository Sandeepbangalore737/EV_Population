import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export default function EVByTypeChart({ data }) {
  const typeCounts = data.reduce((acc, { evType }) => {
    acc[evType] = (acc[evType] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(typeCounts).map(type => ({ name: type, value: typeCounts[type] }));
  const colors = ['#0088FE', '#FFBB28', '#FF8042'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={chartData} dataKey="value" nameKey="name" fill="#8884d8" label>
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
