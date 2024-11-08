import React from 'react';
import { 
  X
} from 'lucide-react';

import DashboardIcon from '../assets/dashboard-icon.svg'
import RequestsIcon from '../assets/requests-icon.svg'
import KycIcon from '../assets/kyc-icon.svg'
import ReportsIcon from '../assets/reports-icon.svg'
import TasksIcon from '../assets/tasks-icon.svg'
import AuditTrailIcon from '../assets/audit-trail-icon.svg'
import CustomersIcon from '../assets/customers-icon.svg'
import UsersIcon from '../assets/users-icon.svg'
import SettingsIcon from '../assets/settings-icon.svg'
import AdministrationIcon from '../assets/administration-icon.svg'

import Logo from '../assets/logoipsum.png'
import ByeWind from '../assets/ByeWind.svg'

interface SidebarProps {
  onClose: () => void;
}

const menuItems = [
  { icon: DashboardIcon, text: 'Dashboard', active: true },
  { icon: RequestsIcon, text: 'Requests' },
  { icon: KycIcon, text: 'KYC' },
  { icon: ReportsIcon, text: 'Reports' },
  { icon: TasksIcon, text: 'Tasks' },
  { icon: AuditTrailIcon, text: 'Audit Trail' },
  { icon: CustomersIcon, text: 'Customers' },
  { icon: UsersIcon, text: 'Users' },
  { icon: SettingsIcon, text: 'Settings' },
  { icon: AdministrationIcon, text: 'Administration' },
];

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="h-full bg-white border-r border-gray-200 p-4 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <img src={Logo} alt="Logo" className="h-8" />
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                  item.active
                    ? 'text-[#161716] font-bold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <img src={item.icon} className="h-5 w-5 mr-3" />
                {item.text}
              </a>
              {(index === 1 || index === 4 || index === 6) && (
          <hr className="border-t border-gray-200 my-2" />
        )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex items-center px-4 py-2">
          <img
            src={ByeWind}
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">ByeWind</p>
        
          </div>
        </div>
      </div>
    </div>
  );
}