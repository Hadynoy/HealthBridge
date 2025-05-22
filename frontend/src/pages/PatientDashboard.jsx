import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-purple-700 dark:text-white mb-8">Welcome to Your Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Upcoming Appointments</h2>
          {appointments.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300">You have no appointments scheduled.</p>
          ) : (
            <p className="text-gray-600 dark:text-gray-300">
              {appointments.length} upcoming appointment{appointments.length > 1 ? 's' : ''}.
            </p>
          )}
          <Link to="/patient/appointments" className="text-purple-600 dark:text-purple-400 text-sm mt-2 block hover:bg-purple-500 hover:text-white p-2 rounded-lg transition-all duration-200">
            View Appointments
          </Link>
        </motion.div>


        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Medical Records</h2>
          <p className="text-gray-600 dark:text-gray-300">Review your health records and past visits.</p>
          <Link to="/patient/records" className="text-purple-600 dark:text-purple-400 text-sm mt-2 block hover:bg-purple-500 hover:text-white p-2 rounded-lg transition-all duration-200">View Records</Link>
        </motion.div>


        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Prescriptions</h2>
          <p className="text-gray-600 dark:text-gray-300">Check your current and past prescriptions.</p>
          <Link to="/patient/prescriptions" className="text-purple-600 dark:text-purple-400 text-sm mt-2 block hover:bg-purple-500 hover:text-white p-2 rounded-lg transition-all duration-200">View Prescriptions</Link>
        </motion.div>


        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Messages</h2>
          <p className="text-gray-600 dark:text-gray-300">Chat with your doctor and check previous messages.</p>
          <Link to="/patient/messages" className="text-purple-600 dark:text-purple-400 text-sm mt-2 block hover:bg-purple-500 hover:text-white p-2 rounded-lg transition-all duration-200">Go to Chat</Link>
        </motion.div>


        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Notifications</h2>
          <p className="text-gray-600 dark:text-gray-300">Stay informed with the latest alerts and updates.</p>
          <div className="flex justify-between items-center mt-3">
            <Link to="/patient/notifications" className="text-purple-600 dark:text-purple-400 text-sm block hover:bg-purple-500 hover:text-white p-2 rounded-lg transition-all duration-200">View Notifications</Link>

            <div className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">3</div>
          </div>
        </motion.div>


        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Billing & Payments</h2>
          <p className="text-gray-600 dark:text-gray-300">Manage your billing history and receipts.</p>
          <Link to="/patient/billing" className="text-purple-600 dark:text-purple-400 text-sm mt-2 block hover:bg-purple-500 hover:text-white p-2 rounded-lg transition-all duration-200">Manage Billing</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PatientDashboard;
