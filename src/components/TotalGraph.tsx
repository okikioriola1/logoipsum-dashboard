import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';


const data = [
  { month: 'Jan', thisYear: 8000, lastYear: 4000 },
  { month: 'Feb', thisYear: 5000, lastYear: 8000 },
  { month: 'Mar', thisYear: 10000, lastYear: 14000 },
  { month: 'Apr', thisYear: 20000, lastYear: 6000 },
  { month: 'May', thisYear: 25000, lastYear: 8000 },
  { month: 'Jun', thisYear: 18000, lastYear: 16000 },
  { month: 'Jul', thisYear: 20000, lastYear: 22000 },
];
  
  const CustomLineChart = () => {
    return (
      <div className="h-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis
            dataKey="month"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value / 1000}K`}
          />
          <Tooltip
            contentStyle={{ background: 'white', border: 'none', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            labelStyle={{ color: '#666' }}
          />
          <Line
            type="monotone"
            dataKey="thisYear"
             stroke="#000"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="lastYear"
                 stroke="#c5c5c5"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    );
  };
  

export default function TotalGraph() {
  return (
    <div className="bg-white md:p-6 rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-3 sm:space-y-0">
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <button className="text-sm text-gray-600 hover:text-gray-900">Total Users</button>
          <button className="text-sm text-gray-400 hover:text-gray-900">Total Projects</button>
          <button className="text-sm text-gray-400 hover:text-gray-900">Operating Status</button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#1C1C1C] rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">This year</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Last year</span>
          </div>
        </div>
      </div>
      
      <div className="h-full sm:h-64 flex items-end space-x-2">
        <div className="relative flex-1 h-full">
<CustomLineChart/>
        </div>
      </div>
    </div>
  );
}




