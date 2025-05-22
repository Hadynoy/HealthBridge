import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import appointment_img from '../assets/appointment_img.webp';

const Banner = () => {
  const navigate = useNavigate();
  const [inView, setInView] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // true when in view, false when out
      },
      { threshold: 0.2 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={bannerRef}
      className="flex flex-col md:flex-row bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 max-w-screen-xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Left side (Content) */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 flex flex-col items-center md:items-start text-center md:text-left max-w-md mx-auto">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate('/signup/patient');
            window.scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
        >
          Create Account
        </button>
      </div>

      {/* Right side (Image) */}
      <motion.div
        className="hidden md:block md:w-1/2 lg:w-[370px] relative min-w-[200px]"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <img className="w-full absolute bottom-0 right-0 max-w-md" src={appointment_img} alt="Appointment" loading="lazy" />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
