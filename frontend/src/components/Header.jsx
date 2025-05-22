import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import group_profiles from '../assets/group_profiles.webp';
import header_img from '../assets/header_img.webp';

const Header = () => {
  return (
    <section className="relative overflow-hidden rounded-lg px-6 md:px-10 lg:px-20 py-16 mt-6 mx-6 md:mx-10 lg:mx-20 bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700 animate-gradient-x">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 rounded-lg pointer-events-none"></div>

      {/* Floating Image */}
      <div className="hidden md:block absolute right-8 bottom-0 w-1/3 max-w-xs lg:max-w-sm">
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          src={header_img}
          alt="Appointment Illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left gap-6 max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight"
        >
          Book Appointment <br /> With Trusted Doctors
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light">
          <img className="w-24 md:w-28" src={group_profiles} alt="Group of Doctors" />
          <p>
            Simply browse through our extensive list of doctors <br className="hidden sm:block" />
            and book an appointment hassle-free.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            to="/book-appointment"
            className="bg-white text-gray-700 px-8 py-3 rounded-full text-sm font-medium transform transition-all duration-300 shadow-md hover:scale-95 hover:-translate-y-1 hover:shadow-purple-300/40 hover:bg-gray-100 hover:shadow-md hover:animate-pulse"
          >
            Book Appointment <i className="fa fa-arrow-right ml-2"></i>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
