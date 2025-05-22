import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookAppointmentPage = () => {
  const [formData, setFormData] = useState({
    doctorId: '',
    date: '',
    time: '',
  });

  const { doctors, bookAppointment, user } = useContext(AppContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("You must be logged in to book an appointment.");
      navigate('/login/patient');
      return;
    }

    if (!formData.doctorId || !formData.date || !formData.time) {
      toast.warn("Please fill in all fields.");
      return;
    }

    bookAppointment(formData);
    toast.success("Appointment booked successfully!");
    navigate('/patient/appointments');
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-purple-700">Book an Appointment</h1>
        <p className="text-gray-600 mt-2 text-lg">
          {user ? `Hello, ${user.name.split(' ')[0]} 👋 Choose your doctor and schedule a visit.` : 'Please log in to continue.'}
        </p>
      </motion.div>


      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border"
      >

        <div>
          <label htmlFor="doctorId" className="block text-lg font-medium text-gray-700 mb-1">👨‍⚕️ Select Doctor</label>
          <select
            id="doctorId"
            name="doctorId"
            value={formData.doctorId}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">-- Choose a doctor --</option>
            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>
                {doctor.name} — {doctor.speciality}
              </option>
            ))}
          </select>
        </div>


        <div>
          <label htmlFor="date" className="block text-lg font-medium text-gray-700 mb-1">📅 Appointment Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>


        <div>
          <label htmlFor="time" className="block text-lg font-medium text-gray-700 mb-1">⏰ Appointment Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>


        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-all duration-200"
        >
          Book Appointment
        </motion.button>
      </motion.form>
    </div>
  );
};

export default BookAppointmentPage;
