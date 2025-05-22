import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Messages = () => {
  // Mock data – Replace with real data from an API or context
  const messages = [
    {
      id: 1,
      sender: 'Dr. James Okoro',
      subject: 'Follow-up on your appointment',
      date: '2025-04-10',
      preview: 'Just wanted to check in after your recent visit. Let me know if you have any concerns.',
    },
    {
      id: 2,
      sender: 'Dr. Amina Yusuf',
      subject: 'Test Results',
      date: '2025-04-05',
      preview: 'Your test results have arrived. Please review the attached documents and let me know...',
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
        Messages
      </motion.h1>

      {messages.length > 0 ? (
        <div className="space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">{message.date}</p>
              <motion.h2
                className="text-lg font-semibold text-gray-800 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {message.subject}
              </motion.h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">From: {message.sender}</p>
              <p className="text-gray-700 dark:text-gray-300">{message.preview}</p>
              <Link
                to={`/patient/messages/${message.id}`}
                className="text-purple-600 dark:text-purple-400 text-sm mt-2 block hover:underline"
              >
                View Message
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
          No messages found.
        </motion.p>
      )}
    </div>
  );
};

export default Messages;
