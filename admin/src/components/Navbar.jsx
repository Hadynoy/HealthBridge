import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { aToken } = useContext(AdminContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('./')
    localStorage.removeItem('aToken');
    window.location.reload(); // or redirect to login page
  };

  return (
    <nav className=" p-2 flex justify-between items-center shadow-lg">
      {/* Logo and User Info */}
      <div className="flex items-center space-x-4">
        <p className="text-xl font-bold text-purple-700">HealthBridge</p>
        <div className="flex items-center space-x-2">
          <span 
            className="bg-purple-700 text-white py-1 px-3 rounded-full text-sm font-medium"
          >
            {aToken ? 'Admin' : 'Doctor'}
          </span>
        </div>
      </div>

      {/* Logout Button */}
      <div>
        <button 
          onClick={handleLogout}
          className="bg-purple-700 text-white py-2 px-10 rounded-full hover:bg-purple-500 transition duration-200 ease-in-out"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
