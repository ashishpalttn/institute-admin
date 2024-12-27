import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import Header from '../../components/common/Header';
import TestPage from '../TestPage';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex h-full">
        <div className='hidden md:flex lg:flex max-h-full flex'>
      <Sidebar />
      </div>
      <div className="w-[83%] flex-1 flex flex-col sm:ml-0 md:ml-64 lg:ml-0 lg:ml-0 lg:ml-0">
        <Header />
        <main className=" bg-white-700 p-4  h-[90%]">
        <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default App;
