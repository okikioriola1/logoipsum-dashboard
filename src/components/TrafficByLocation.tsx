import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Nigeria', value: 38.6, color: '#1F1F1F' },
  { name: 'Ghana', value: 22.5, color: '#9CE6B0' },
  { name: 'Kenya', value: 30.8, color: '#A5D8FF' },
  { name: 'Benin Republic', value: 8.1, color: '#D9D9D9' },
];

const CustomLegend = ({ payload }: any) => {
  return (
    <div className=" ml-4 flex flex-col space-y-2">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <span
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-900">{entry.value}</span>
          </div>
          <span className="text-sm text-gray-900">{data[index].value}%</span>
        </div>
      ))}
    </div>
  );
};

export default function TrafficByLocation() {
  return (
    <div className="bg-gray-50 p-2 rounded-xl">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 mt-4 pl-4">Traffic by Location</h2>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              content={<CustomLegend />}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}