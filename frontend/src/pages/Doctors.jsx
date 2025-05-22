import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const Doctor = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (doctors.length > 0) {
      setIsLoading(false);
    }
  }, [doctors]);

  const formattedSpeciality = speciality ? speciality.toLowerCase().replace(/\s+/g, '-') : null;

  const filteredDoctors = doctors.filter((doctor) => {
    return formattedSpeciality ? doctor.speciality.toLowerCase().replace(/\s+/g, '-') === formattedSpeciality : true;
  });

  const specialities = [
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  const handleSpecialityClick = (spec) => {
    const formattedSpec = spec.toLowerCase().replace(/\s+/g, '-');
    navigate(`/doctors/${formattedSpec}`);
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-6 my-16 px-6 md:px-10 lg:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-4 text-center sm:text-left">
        Browse through our list of doctors
      </h1>
      <p className="sm:w-1/3 text-center sm:text-left text-sm text-gray-700 mb-6">
        Simply browse and book a doctor that suits your needs.
      </p>

      <motion.div
        className="flex gap-4 mb-6 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {specialities.map((spec) => (
          <motion.button
            key={spec}
            className={`px-6 py-2 rounded-lg text-white transition-all duration-300 ${speciality === spec.toLowerCase().replace(/\s+/g, '-') ? 'bg-purple-500 shadow-lg' : 'bg-gray-400'
              } hover:bg-purple-600 sm:px-8 md:px-10 lg:px-12 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            onClick={() => handleSpecialityClick(spec)}
            aria-label={`Select speciality: ${spec}`}
          >
            {spec}
          </motion.button>
        ))}
      </motion.div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-5">
        {isLoading ? (
          <div className="flex justify-center items-center col-span-full">
            <div className="w-8 h-8 border-4 border-t-4 border-purple-500 rounded-full animate-spin"></div>
          </div>
        ) : filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <motion.div
              className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:shadow-xl hover:border-purple-300"
              key={doctor._id}
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              aria-label={`Book appointment with Dr. ${doctor.name}`}
            >
              <img
                className="w-full h-48 object-cover bg-blue-50"
                src={doctor.image}
                alt={doctor.name}
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500 mb-2">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-lg font-medium text-gray-900">{doctor.name}</p>
                <p className="text-gray-600 text-sm">{doctor.speciality}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600">No doctors found for this speciality.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Doctor;
