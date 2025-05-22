import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; // Importing the context
import { motion } from 'framer-motion';

const TopDoctors = () => {
  const navigate = useNavigate();

  // Accessing the doctors from context
  const { doctors } = useContext(AppContext);
  const topDoctors = Array.isArray(doctors) ? doctors.slice(0, 10) : [];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="flex flex-col items-center gap-4 my-16 px-6 md:px-10 lg:px-20">
      <motion.h1
        className="text-3xl font-medium text-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        Top Doctors to Book
      </motion.h1>

      <motion.p
        className="sm:w-1/3 text-center text-sm text-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }
        }}
      >
        Simply browse and book a doctor that suits your needs
      </motion.p>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-5 gap-y-6">
        {topDoctors.length === 0 ? (
          <p>No doctors available at the moment.</p>
        ) : (
          topDoctors.map((item, i) => (
            <motion.div
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
              key={item._id}
              onClick={() => navigate(`/appointment/${item._id}`)}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <img className="bg-blue-50 w-full" src={item.image} alt={item.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p>Available</p>
                </div>
                <p className="text-lg font-medium text-gray-900">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </motion.div>
          ))
        )}
      </div>

      <motion.button
        onClick={() => {
          navigate('/doctors');
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 border border-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }
        }}
      >
        More
      </motion.button>
    </div>
  );
};

export default TopDoctors;
