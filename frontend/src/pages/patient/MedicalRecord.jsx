import React from 'react';
import { motion } from 'framer-motion';

const MedicalRecords = () => {
  // Mock data – later you can connect it to your API or context
  const records = [
    {
      id: 1,
      date: '2025-03-10',
      doctor: 'Dr. James Okoro',
      description: 'Routine checkup. Blood pressure was slightly elevated.',
    },
    {
      id: 2,
      date: '2025-02-15',
      doctor: 'Dr. Amina Yusuf',
      description: 'Follow-up visit. Lab results reviewed and medication adjusted.',
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
        Medical Records
      </motion.h1>

      {records.length > 0 ? (
        <div className="space-y-4">
          {records.map((record) => (
            <motion.div
              key={record.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">{record.date}</p>
              <motion.h2
                className="text-lg font-semibold text-gray-800 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {record.doctor}
              </motion.h2>
              <p className="text-gray-700 dark:text-gray-300">{record.description}</p>
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
          No medical records found.
        </motion.p>
      )}
    </div>
  );
};

export default MedicalRecords;
