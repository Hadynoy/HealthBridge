import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProfilePic from '../../assets/adi.jpg';

const userLoginData = {
  name: "Onubaiye Adinoy",
  age: 25,
  gender: "Male",
  phoneNumber: "+234 809-8986-274",
  email: "bigmoerell@gmail.com",
  medicalHistory: "No known allergies, history of asthma",
  address: "123 Lagos Street, Lagos State, Nigeria",
  profilePicUrl: ProfilePic,
};

const Profile = () => {
  const [patientData, setPatientData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setPatientData(userLoginData);
    setEditFormData(userLoginData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPatientData(editFormData);
    setShowModal(false);
  };

  if (!patientData) {
    return <div className="text-center text-gray-700">Loading your profile...</div>;
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl text-gray-800 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Profile Header */}
      <div className="flex items-center space-x-6 mb-6">
        <motion.img
          src={patientData.profilePicUrl || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-black object-cover shadow-md"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div>
          <h2 className="text-2xl font-bold">{patientData.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {patientData.age} years old, {patientData.gender}
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-6 space-y-1">
        <h3 className="text-xl font-semibold">Contact Information</h3>
        <p>📞 {patientData.phoneNumber}</p>
        <p>📧 {patientData.email}</p>
        <p>🏠 {patientData.address}</p>
      </div>

      {/* Medical History */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">Medical History</h3>
        <p>{patientData.medicalHistory}</p>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-4 mt-6">
        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Edit Profile
        </button>
        <button
          onClick={() => navigate('/patient/appointments')}
          className="px-5 py-2 bg-gray-300 dark:bg-gray-700 dark:text-white text-gray-800 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          View Appointments
        </button>
      </div>

      {/* Upload New Picture */}
      <div className="mt-6">
        <label className="block text-sm font-semibold mb-2">Change Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          className="p-2 border border-gray-300 rounded-md"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setPatientData((prevData) => ({
                ...prevData,
                profilePicUrl: URL.createObjectURL(file),
              }));
            }
          }}
        />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Full Name"
                />
                <input
                  type="number"
                  name="age"
                  value={editFormData.age}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Age"
                />
                <input
                  type="text"
                  name="gender"
                  value={editFormData.gender}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Gender"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={editFormData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Phone Number"
                />
                <input
                  type="email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="address"
                  value={editFormData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Address"
                />
                <textarea
                  name="medicalHistory"
                  value={editFormData.medicalHistory}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Medical History"
                />
                <div className="flex justify-end space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Profile;
