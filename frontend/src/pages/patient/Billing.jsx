import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Billing = () => {
  const bills = [
    {
      id: 1,
      amount: '500.00',
      dueDate: '2025-04-20',
      status: 'Unpaid',
    },
    {
      id: 2,
      amount: '350.00',
      dueDate: '2025-04-15',
      status: 'Paid',
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
        Billing & Payments
      </motion.h1>

      {bills.length > 0 ? (
        <div className="space-y-4">
          {bills.map((bill) => (
            <motion.div
              key={bill.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Due Date: <span className="font-medium">{bill.dueDate}</span>
                </p>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${bill.status === 'Paid'
                      ? 'bg-green-200 text-green-800'
                      : 'bg-red-200 text-red-800'
                    }`}
                >
                  {bill.status}
                </span>
              </div>
              <motion.h2
                className="text-lg font-semibold text-gray-800 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                Amount: ${bill.amount}
              </motion.h2>
              <Link
                to={`/patient/billing/${bill.id}`}
                className="text-purple-600 dark:text-purple-400 text-sm mt-2 block hover:underline"
              >
                View Details
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
          No billing records found.
        </motion.p>
      )}
    </div>
  );
};

export default Billing;
