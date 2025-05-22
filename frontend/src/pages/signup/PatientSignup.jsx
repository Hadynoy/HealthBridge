import React, { useState } from "react";
import { motion } from "framer-motion";

const PatientSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 dark:from-gray-900 dark:to-black">
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
          Patient Sign Up
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Password
            </label>
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Confirm Password
            </label>
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

export default PatientSignup;
