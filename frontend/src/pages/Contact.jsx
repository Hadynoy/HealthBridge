import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };

  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700">Contact Us</h2>
        <p className="text-gray-600 mt-2">We'd love to hear from you!</p>
      </motion.div>


      <div className="flex flex-col lg:flex-row gap-10">

        <motion.div
          className="w-full lg:w-1/2 space-y-6 text-gray-700 bg-purple-50 p-6 rounded-md shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-2xl font-semibold">Get In Touch</h3>
          <p>
            Fill out the form or reach out using the contact information below. We'll get back to you as soon as we can.
          </p>
          <div>
            <p className="font-medium">📍 Address</p>
            <p>123 HealthBridge St, City, Country</p>
          </div>
          <div>
            <p className="font-medium">📞 Phone</p>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <p className="font-medium">📧 Email</p>
            <p>support@healthbridge.com</p>
          </div>
        </motion.div>


        <motion.form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <label className="block text-gray-700 font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border-b-2 border-gray-300 focus:border-purple-500 outline-none py-2 px-1 bg-transparent"
                required
              />
            </motion.div>


            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="block text-gray-700 font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Moerell"
                className="w-full border-b-2 border-gray-300 focus:border-purple-500 outline-none py-2 px-1 bg-transparent"
                required
              />
            </motion.div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                className="w-full border-b-2 border-gray-300 focus:border-purple-500 outline-none py-2 px-1 bg-transparent"
                required
              />
            </motion.div>


            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 123 456 7890"
                className="w-full border-b-2 border-gray-300 focus:border-purple-500 outline-none py-2 px-1 bg-transparent"
              />
            </motion.div>
          </div>


          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <label className="block text-gray-700 font-medium mb-1">Select Subject?</label>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="general-enquiry"
                  name="subject"
                  value="General Enquiry"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="general-enquiry" className="text-gray-700">General Enquiry</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="appointment-booking"
                  name="subject"
                  value="Appointment Booking"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="appointment-booking" className="text-gray-700">Appointment Booking</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="feedback"
                  name="subject"
                  value="Feedback"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="feedback" className="text-gray-700">Feedback</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="technical-support"
                  name="subject"
                  value="Technical Support"
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="technical-support" className="text-gray-700">Technical Support</label>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows={3}
              className="w-full border-none focus:border-none outline-none py-2 px-3 bg-transparent resize-none"
              required
            />
          </motion.div>


          <motion.div
            className="text-right"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="submit"
              className="bg-purple-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
            >
              Send Message
            </button>
          </motion.div>

        </motion.form>
      </div>


      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Find Us Here</h3>
        <div className="w-full h-64 sm:h-96 rounded-md overflow-hidden shadow-md">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.351474380658!2d-122.0760835!3d37.3844735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7d04dbbda945%3A0x8de32c8f216c7f7d!2sStanford%20University!5e0!3m2!1sen!2sus!4v1581535983167!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
