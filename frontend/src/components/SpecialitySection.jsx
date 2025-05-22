// src/components/SpecialitySection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { specialityData } from '../data/specialityData';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

const SpecialitySection = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800 max-w-6xl mx-auto text-center">
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-medium mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Find by Speciality
      </motion.h2>

      {/* Section Description */}
      <motion.p
        className="sm:w-1/3 text-center text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </motion.p>

      {/* Speciality Carousel for small screens */}
      <div className="w-full pt-5 block sm:hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={16}
          freeMode={true}
          modules={[FreeMode]}
        >
          {specialityData.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/doctors/${item.speciality.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-center"
                >
                  <img src={item.image} alt={item.speciality} className="w-16 mb-2" />
                  <p className="text-sm font-medium">{item.speciality}</p>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid display for larger screens */}
      <div className="hidden sm:flex sm:flex-wrap sm:justify-center gap-4 pt-5">
        {specialityData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              to={`/doctors/${item.speciality.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-center"
            >
              <img src={item.image} alt={item.speciality} className="w-24 mb-2" loading="lazy" />
              <p className="text-sm font-medium">{item.speciality}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SpecialitySection;
