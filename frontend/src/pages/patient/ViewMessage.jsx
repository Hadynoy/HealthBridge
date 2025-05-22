import React from 'react';
import { useParams } from 'react-router-dom';

const ViewMessage = () => {
  const { id } = useParams();

  // Mock data – Replace with real data from an API or context
  const messages = [
    {
      id: 1,
      sender: 'Dr. James Okoro',
      subject: 'Follow-up on your appointment',
      date: '2025-04-10',
      content: 'Just wanted to check in after your recent visit. Let me know if you have any concerns.',
    },
    {
      id: 2,
      sender: 'Dr. Amina Yusuf',
      subject: 'Test Results',
      date: '2025-04-05',
      content: 'Your test results have arrived. Please review the attached documents and let me know...',
    },
  ];

  const message = messages.find((msg) => msg.id === parseInt(id));

  if (!message) {
    return <p className="text-red-600">Message not found</p>;
  }

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-purple-700 dark:text-white mb-6">Message Details</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <p className="text-sm text-gray-500 dark:text-gray-400">{message.date}</p>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{message.subject}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">From: {message.sender}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{message.content}</p>
      </div>
    </div>
  );
};

export default ViewMessage;
