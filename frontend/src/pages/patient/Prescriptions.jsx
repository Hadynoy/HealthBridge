import React from 'react';

const Prescriptions = () => {
  // Mock data – later you can connect it to your API or context
  const prescriptions = [
    {
      id: 1,
      medication: 'Amoxicillin',
      dosage: '500mg',
      instructions: 'Take 1 capsule three times a day for 7 days.',
      doctor: 'Dr. James Okoro',
      date: '2025-03-10',
    },
    {
      id: 2,
      medication: 'Ibuprofen',
      dosage: '200mg',
      instructions: 'Take 1 tablet every 6 hours as needed for pain.',
      doctor: 'Dr. Amina Yusuf',
      date: '2025-02-15',
    },
  ];

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-purple-700 dark:text-white mb-6">Prescriptions</h1>

      {prescriptions.length > 0 ? (
        <div className="space-y-4">
          {prescriptions.map((prescription) => (
            <div key={prescription.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <p className="text-sm text-gray-500 dark:text-gray-400">{prescription.date}</p>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{prescription.medication}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Dosage: {prescription.dosage}</p>
              <p className="text-gray-700 dark:text-gray-300">Instructions: {prescription.instructions}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Prescribed by: {prescription.doctor}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No prescriptions found.</p>
      )}
    </div>
  );
};

export default Prescriptions;
