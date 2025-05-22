import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProfilePic from '../assets/adi.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, userRole, userInfo, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen);
    setLoginDropdownOpen(false);
  };

  const handleLogoutClick = () => {
    logout();
    setDropdownOpen(false);
    navigate('/');
  };

  const handleLoginClick = () => {
    setLoginDropdownOpen(!loginDropdownOpen);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const closeDropdowns = () => {
      setDropdownOpen(false);
      setLoginDropdownOpen(false);
    };
    window.addEventListener('scroll', closeDropdowns);
    return () => window.removeEventListener('scroll', closeDropdowns);
  }, []);

  const handleNavLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setLoginDropdownOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-purple-700">
          HealthBridge
        </NavLink>

        {/* Hamburger */}
        <div className="lg:hidden ml-auto">
          <button onClick={() => setMenuOpen(true)} className="text-gray-700 dark:text-gray-300">
            <i className="fa fa-bars text-xl"></i>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 font-medium">
          {['Home', 'Doctors', 'Contact', 'News', 'About Us'].map((label, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <NavLink
                to={label === 'Home' ? '/' : `/${label.toLowerCase().replace(' ', '-')}`}
                onClick={handleNavLinkClick}
                className={({ isActive }) =>
                  `py-2 px-3 rounded-md transition duration-300 ${isActive
                    ? 'text-purple-700 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                  } hover:text-purple-700 dark:hover:text-white`
                }
              >
                {label}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Profile or Login */}
        <div className="hidden lg:block relative">
          {!isAuthenticated ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLoginClick}
              className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-full text-sm px-6 py-2"
            >
              Login
            </motion.button>
          ) : (
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleProfileClick}
              >
                <img
                  src={userInfo?.profilePicture || ProfilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </motion.button>
            </div>
          )}

          {/* Login Dropdown */}
          {loginDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li><NavLink to="/login/patient" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Patient Login</NavLink></li>
                <li><NavLink to="/login/doctor" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Doctor Login</NavLink></li>
                <li><NavLink to="/login/admin" onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Admin Login</NavLink></li>
              </ul>
            </div>
          )}

          {/* Profile Dropdown */}
          {dropdownOpen && (
            <div className="absolute top-12 right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li><NavLink to={`/${userRole.toLowerCase()}/dashboard`} onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</NavLink></li>
                <li><NavLink to={`/${userRole.toLowerCase()}/profile`} onClick={handleNavLinkClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</NavLink></li>
                <li><button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</button></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-64 bg-purple-700/40 backdrop-blur-md text-white shadow-lg z-50 p-5 lg:hidden"
          >
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)} className="text-white">
                <X size={24} />
              </button>
            </div>

            <ul className="mt-6  space-y-4 text-lg font-medium">
              {['Home', 'Doctors', 'Contact', 'News', 'About Us'].map((label, index) => (
                <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <NavLink
                    to={label === 'Home' ? '/' : `/${label.toLowerCase().replace(' ', '-')}`}
                    onClick={handleNavLinkClick}
                    className="block px-4 py-2 rounded-md bg-purple-400  hover:bg-purple-600/30 transition duration-200 text-white"
                  >
                    {label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6">
              {!isAuthenticated ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleLoginClick}
                  className="w-full text-white bg-purple-700 hover:bg-purple-500 rounded-full text-sm py-2"
                >
                  Login
                </motion.button>
              ) : (
                <div className="space-y-2 mt-4">
                  <NavLink to={`/${userRole.toLowerCase()}/dashboard`} onClick={handleNavLinkClick} className="block text-white bg-purple-700/30 hover:bg-purple-600/30 rounded-md px-4 py-2">Dashboard</NavLink>
                  <NavLink to={`/${userRole.toLowerCase()}/profile`} onClick={handleNavLinkClick} className="block text-white bg-purple-700/30 hover:bg-purple-600/30 rounded-md px-4 py-2">Profile</NavLink>
                  <button onClick={handleLogoutClick} className="w-full text-red-200 hover:bg-purple-700/20 rounded-md px-4 py-2 text-left">Logout</button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
