import React from 'react';
import { Search, Sun, History, Bell, Layout, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={onMenuClick}
            className="p-2 mr-3 hover:bg-gray-100 rounded-lg lg:hidden"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <h1 className="text-xl md:text-2xl font-sans font-semibold text-gray-800">Dashboard</h1>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-40 md:w-60 pl-10 bg-gray-100 pr-4 py-2 text-sm border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Search className="h-5 w-5 text-gray-600 md:hidden" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-lg hidden sm:block">
            <Sun className="h-5 w-5 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-lg hidden sm:block">
            <History className="h-5 w-5 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Layout className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}