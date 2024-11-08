import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Jan', value: 15000, color: '#95A4FC' },
  { name: 'Feb', value: 25000, color: '#BAEDBD' },
  { name: 'Mar', value: 18000, color: '#1C1C1C' },
  { name: 'Apr', value: 30000, color: '#B1E3FF' },
  { name: 'May', value: 10000, color: '#A8C5DA' },
  { name: 'Jun', value: 19000, color: '#9CE6B0' },
  { name: 'Jul', value: 15000, color: '#95A4FC' },
  { name: 'Aug', value: 25000, color: '#BAEDBD' },
  { name: 'Sep', value: 18000, color: '#1C1C1C' },
  { name: 'Oct', value: 30000, color: '#B1E3FF' },
  { name: 'Nov', value: 10000, color: '#A8C5DA' },
  { name: 'Dec', value: 19000, color: '#A1E3CB' },
];

export default function MarketingSeo() {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Marketing & SEO</h2>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
            <XAxis 
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              ticks={[0, 10000, 20000, 30000]}
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Bar
              dataKey="value"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}