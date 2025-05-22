import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  const navItems = [
    { to: '/admin-dashboard', icon: assets.home_icon, label: 'Dashboard' },
    { to: '/all-appointments', icon: assets.appointment_icon, label: 'Appointments' },
    { to: '/add-doctor', icon: assets.add_icon, label: 'Add Doctor' },
    { to: '/doctor-list', icon: assets.people_icon, label: 'Doctors List' },
  ];

  return (
    aToken && (
      <div className="w-60 h-screen  p-6">
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center space-x-4 p-3 rounded-lg transition duration-200 ease-in-out ${
                    isActive
                      ? 'bg-purple-100 text-purple-700 font-semibold'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`
                }
              >
                <img src={item.icon} alt={item.label} className="w-6 h-6" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Sidebar;
