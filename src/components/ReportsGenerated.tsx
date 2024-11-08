import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Linux', value: 15000, color: '#8B5CF6' },
  { name: 'Mac', value: 25000, color: '#9CE6B0' },
  { name: 'iOS', value: 18000, color: '#1F1F1F' },
  { name: 'Windows', value: 28000, color: '#A5D8FF' },
  { name: 'Android', value: 10000, color: '#D9D9D9' },
  { name: 'Other', value: 22000, color: '#9CE6B0' },
];

export default function ReportsGenerated() {
  return (
    <div className="bg-gray-50 rounded-xl p-2">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 mt-4 pl-4">Reports Generated</h2>
      
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