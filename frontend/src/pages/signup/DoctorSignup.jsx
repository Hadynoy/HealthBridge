import React, { useState } from "react";
import { motion } from "framer-motion";

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialization: "",
    licenseNumber: "",
    experience: "",
    hospital: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor signed up:", formData);
    // Add API logic later
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
      },
    }),
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
      >
        <motion.h2
          className="text-3xl font-bold text-center text-purple-700 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Doctor Sign Up
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { name: "fullName", label: "Full Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Phone Number", type: "tel" },
            { name: "specialization", label: "Specialization", type: "text" },
            { name: "licenseNumber", label: "License Number", type: "text" },
            { name: "experience", label: "Years of Experience", type: "number" },
            { name: "hospital", label: "Hospital Affiliation", type: "text" },
            { name: "password", label: "Password", type: "password" },
            { name: "confirmPassword", label: "Confirm Password", type: "password" },
          ].map((field, index) => (
            <motion.div
              key={field.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </motion.div>
          ))}

          <motion.div
            className="flex items-center space-x-2"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={9}
          >
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              required
            />
            <label className="text-sm text-gray-700 dark:text-gray-300">
              I agree to the terms and conditions
            </label>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={10}
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default DoctorSignup;
