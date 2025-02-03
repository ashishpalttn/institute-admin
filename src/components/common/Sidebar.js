import React, { useState } from 'react';
import { menuData } from '../../data/menuData';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
  FaHome,
  FaCalendarAlt,
  FaUserGraduate,
  FaChalkboardTeacher
} from 'react-icons/fa';

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'FaHome':
      return <FaHome />;
    case 'FaCalendarAlt':
      return <FaCalendarAlt />;
    case 'FaUserGraduate':
      return <FaUserGraduate />;
    case 'FaChalkboardTeacher':
      return <FaChalkboardTeacher />;
    default:
      return null;
  }
};

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className={`fixed z-40 top-0 left-0 h-full bg-sky-700 text-white  transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-64 lg:relative lg:h-auto`}>
      {/* <button 
        className="lg:hidden p-4"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaChevronDown /> : <FaChevronUp />}
      </button> */}
      <div className="p-4 text-2xl font-bold ">
        Menu
      </div>
      <nav className="flex-1 overflow-y-auto">
        {menuData.map((menu, index) => (
          <div key={index}>
            <div
              className="px-4 py-2 cursor-pointer flex justify-between items-center hover:bg-sky-600"
              onClick={() => toggleMenu(menu.title)}
            >
              <div className="flex items-center space-x-2">
                {getIconComponent(menu.icon)}
                <span>{menu.title}</span>
              </div>
              {activeMenu === menu.title ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {activeMenu === menu.title && (
              <div className="pl-8 space-y-2">
                {menu.submenus.map((submenu, subIndex) => (
                  <a
                    key={subIndex}
                    href={submenu.path}
                    className="block hover:bg-sky-600 p-2 rounded"
                  >
                    {submenu.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
