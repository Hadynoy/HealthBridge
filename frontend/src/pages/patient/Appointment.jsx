import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';
import { FaRegTrashAlt } from 'react-icons/fa'; 
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Appointments = () => {
  const { appointments, setAppointments } = useContext(AppContext);

  // Function to handle canceling an appointment with confirmation through toast
  const cancelAppointment = (appointmentId) => {
   
    toast(
      <div className="flex items-center space-x-2">
        <span>Are you sure you want to cancel this appointment?</span>
        <button
          onClick={() => {
            
            setAppointments((prevAppointments) =>
              prevAppointments.filter(appointment => appointment.id !== appointmentId)
            );
            toast.dismiss(); 
          }}
          className="text-red-500 font-semibold"
        >
          Yes, Cancel
        </button>
      </div>,
      {
        position: "top-center",
        autoClose: false, 
        closeOnClick: false, 
        pauseOnHover: false, 
        draggable: false, 
        progress: undefined,
        theme: "light",
      }
    );
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen dark:bg-gray-900">
      <h1 className="text-3xl font-semibold text-purple-700 dark:text-white mb-8">My Appointments</h1>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg">
          <thead>
            <tr className="text-left text-gray-600 dark:text-gray-300 border-b dark:border-gray-700">
              <th className="p-4">Doctor</th>
              <th className="p-4">Date</th>
              <th className="p-4">Time</th>
              <th className="p-4">Department</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th> 
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <motion.tr
                  key={appointment.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <td className="p-4 font-medium text-gray-800 dark:text-white">{appointment.doctor}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">{appointment.date}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">{appointment.time}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">{appointment.department}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${appointment.status === 'Upcoming'
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-700 dark:text-white'
                          : 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-white'
                        }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => cancelAppointment(appointment.id)}
                      className="flex items-center space-x-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500 transition-all duration-200"
                    >
                      <FaRegTrashAlt />
                      <span>Cancel</span>
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-600 dark:text-gray-300">
                  You have no appointments booked.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Toast Container to render the toast notifications */}
      <ToastContainer
        position="top-center"
        autoClose={false}  
        closeOnClick={false}  
        pauseOnHover={false}  
        draggable={false}  
        style={{
          position: "fixed",   
          top: "50%",          
          left: "50%",         
          transform: "translate(-50%, -50%)",  
          zIndex: 9999,         
        }}
      />
    </div>
  );
};

export default Appointments;
