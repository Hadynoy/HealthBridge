import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'New Appointment Reminder',
      date: '2025-04-15',
      content: 'You have an upcoming appointment with Dr. James Okoro tomorrow at 10:00 AM.',
    },
    {
      id: 2,
      title: 'Billing Update',
      date: '2025-04-14',
      content: 'Your latest bill has been generated. Please check your billing section for more details.',
    },
  ];

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen dark:bg-gray-900">
      <motion.h1
        className="text-2xl font-bold text-purple-700 dark:text-white mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Notifications
      </motion.h1>

      {notifications.length > 0 ? (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">{notification.date}</p>
              <motion.h2
                className="text-lg font-semibold text-gray-800 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {notification.title}
              </motion.h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{notification.content}</p>
              <Link
                to={`/patient/notifications/${notification.id}`}
                className="text-purple-600 dark:text-purple-400 text-sm mt-2 block hover:underline"
              >
                View Notification
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.p
          className="text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No notifications found.
        </motion.p>
      )}
    </div>
  );
};

export default Notifications;
