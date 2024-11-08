
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  isBgBlack:boolean
}

import StatCardArrow from '../assets/StatCardArrow.png'
import StatCardArrowDown from '../assets/StatCardArrowDown.png'

export default function StatCard({ title, value, change, isPositive, isBgBlack }: StatCardProps) {
  return (
    <div className={`${isBgBlack ? 'bg-[#E3F5FF]':'bg-[#E5ECF6]'} p-6 rounded-xl shadow-sm `}>
      <h3 className="text-primary-100 text-sm mb-2">{title}</h3>
      <div className="flex items-baseline">
        <p className="text-2xl font-semibold font-sans text-gray-800">{value}</p>
        <span className={`ml-2 text-sm text-primary-100`}>
          {change}
        </span>
        <span><img src={isPositive ? StatCardArrow : StatCardArrowDown }></img></span>
      </div>
    </div>
  );
}