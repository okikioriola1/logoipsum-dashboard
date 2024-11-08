import  { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import TrafficTable from './components/TrafficTable';
import NotificationsPanel from './components/NotificationsPanel';
import TrafficByLocation from './components/TrafficByLocation';
import ReportsGenerated from './components/ReportsGenerated';
import MarketingSeo from './components/MarketingSeo';
import TotalGraph from './components/TotalGraph';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
     
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

  
      <div className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white transform 
        lg:relative lg:translate-x-0 transition-transform duration-200 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <div className="flex-1 flex overflow-hidden">
        
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
                 <StatCard
              title="Requests"
              value="7,265"
              change="+1.02%"
              isPositive={true}
              isBgBlack={true}
            />
            <StatCard
              title="KYC"
              value="3,671"
              change="-0.03%"
              isPositive={false}
              isBgBlack={false}
            />
            <StatCard
              title="Tasks"
              value="156"
              change="+15.03%"
              isPositive={true}
              isBgBlack={true} 
            />
            <StatCard
              title="Customers"
              value="2,318"
              change="+6.08%"
              isPositive={true}
              isBgBlack={false}
            />
            </div>

            <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col md:flex-row justify-between w-full h-full">
  <div className="w-full md:w-[70%] md:mr-2">
    <TotalGraph />
  </div>
  <div className="w-full md:w-[30%]">
    <TrafficTable />
  </div>
</div>
           
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-xl shadow-sm">
                  <ReportsGenerated/>
                </div>
                <div className="rounded-xl shadow-sm">
                <TrafficByLocation />
                </div>
              </div>

              <MarketingSeo/>
            </div>
          </main>


          <aside className="hidden lg:block w-[264px] border-l bg-[#FFF8F8] border-gray-200 overflow-y-auto mx-4 mt-4">
            <NotificationsPanel />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;