import React from 'react';
import { useParams } from 'react-router-dom';

const ViewNotification = () => {
  const { id } = useParams();

  // Mock data – Replace with real data from an API or context
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

  const notification = notifications.find((notif) => notif.id === parseInt(id));

  if (!notification) {
    return <p className="text-red-600">Notification not found</p>;
  }

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-purple-700 dark:text-white mb-6">Notification Details</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <p className="text-sm text-gray-500 dark:text-gray-400">{notification.date}</p>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{notification.title}</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{notification.content}</p>
      </div>
    </div>
  );
};

export default ViewNotification;
