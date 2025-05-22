import React, { useState } from "react";
import { motion } from "framer-motion";

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="flex p-4 justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 dark:from-gray-900 dark:to-black">
      <motion.div
        className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-6 text-purple-700 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Admin Sign Up
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
          </motion.div>

          {/* Email Address */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
          </motion.div>

          {/* Department */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            >
              <option value="">Select Role</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Admin">Admin</option>
            </select>
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
          </motion.div>

          {/* Confirm Password */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-md mt-4 hover:bg-purple-800 transition duration-300 shadow-md"
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminSignup;
