import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';

const LoginForm = ({ role }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const { login, logout, userInfo } = useAuth();
  const navigate = useNavigate();

  const mockCredentials = {
    Patient: { email: 'patient1@example.com', password: '123456' },
    Doctor: { email: 'doctor1@example.com', password: 'doctor123' },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = mockCredentials[role];

    if (email === credentials.email && password === credentials.password) {
      login(role, { email, name: `${role} User` });
      alert(`Login successful as ${role}!`);
      navigate(`/${role.toLowerCase()}/dashboard`);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    logout();
    alert('Logged out successfully');
    navigate('/login');
  };

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <motion.div
      className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg dark:bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-center text-purple-700 dark:text-white mb-6">
        {role} Login
      </h2>

      {!userInfo ? (
        <form onSubmit={handleSubmit} className="space-y-5">


          {/* Email input */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-md dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          {/* Password input */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border rounded-md dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 rounded-md transition-all"
          >
            Login
          </button>
        </form>
      ) : (
        <div className="flex justify-end">
          <div className="relative">
            <button onClick={toggleMenu} className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white text-lg">
                {userInfo.name ? userInfo.name.charAt(0).toUpperCase() : <FaUserCircle size={28} />}
              </div>
            </button>
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md border dark:border-gray-700"
                >
                  <ul className="py-2 text-sm text-gray-800 dark:text-gray-200">
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left hover:bg-purple-600 hover:text-white transition-colors"
                      >
                        Logout
                      </button>
                    </li>
                    <li>
                      <button className="w-full px-4 py-2 text-left hover:bg-purple-600 hover:text-white transition-colors">
                        Profile Settings
                      </button>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {!userInfo && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Don’t have an account?{' '}
            <Link
              to={`/signup/${role.toLowerCase()}`}
              className="text-purple-700 dark:text-purple-400 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default LoginForm;
