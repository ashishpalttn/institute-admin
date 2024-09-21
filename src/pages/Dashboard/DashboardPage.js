import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import Header from '../../components/common/Header';
import Dashboard from '../../components/common/DashboardContent';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
        <div className='hidden md:flex lg:flex h-full flex'>
      <Sidebar />
      </div>
      <div className="flex-1 flex flex-col sm:ml-0 md:ml-64 lg:ml-0 lg:ml-0 lg:ml-0">
        <Header />
        <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
