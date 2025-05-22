import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
  const { doctorId } = useParams();
  const { doctors, bookAppointment, user } = useContext(AppContext);
  const [doctor, setDoctor] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchAvailableSlots = (date) => {
    return [
      "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"
    ];
  };

  useEffect(() => {
    if (doctors.length > 0) {
      const selectedDoctor = doctors.find(doc => doc._id === doctorId) || location.state;
      setDoctor(selectedDoctor);

      const slots = fetchAvailableSlots(currentDate);
      setAvailableSlots(slots);
    }
  }, [doctorId, doctors, currentDate, location.state]);

  const handleBooking = () => {
    if (!user) {
      navigate('/login/patient');
      return;
    }

    const newAppointment = {
      doctorId: doctor._id,
      doctorName: doctor.name,
      date: currentDate.toLocaleDateString(),
      time: selectedSlot,
      fees: doctor.fees,
      image: doctor.image,
    };

    bookAppointment(newAppointment);
    navigate('/patient/appointments');
  };

  const handleDateChange = (date) => {
    setCurrentDate(date);
    const slots = fetchAvailableSlots(date);
    setAvailableSlots(slots);
  };

  if (!doctor) {
    return (
      <div className='text-center text-gray-600 py-20'>
        Loading doctor info...
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center gap-4 my-16 px-6 md:px-10 lg:px-20'>
      <h1 className='text-3xl font-medium text-gray-900 mb-4'>
        Book an Appointment with {doctor.name}
      </h1>

      <div className='flex flex-col md:flex-row items-center gap-8'>
        <img
          className='w-48 h-48 object-cover rounded-full border-4 border-gray-200'
          src={doctor.image}
          alt={doctor.name}
        />
        <div className='text-center md:text-left'>
          <p className='text-lg font-medium text-gray-900'>{doctor.name}</p>
          <div className='flex items-center gap-2 mt-2'>
            <span className='text-sm text-gray-600'>{doctor.degree}</span>
            <span className='text-sm text-gray-600'> - </span>
            <span className='text-sm text-gray-600'>{doctor.speciality}</span>
            <span className='px-3 py-1 text-xs bg-gray-200 text-gray-600 rounded-full'>
              {doctor.experience}
            </span>
          </div>
          <div className='flex items-center gap-2 text-sm text-center text-green-500 mt-4'>
            <p className='w-2 h-2 bg-green-500 rounded-full'></p>
            <p>Available for consultation</p>
          </div>
          <p className='text-lg font-semibold text-gray-700 mt-4'>Appointment Fee: ${doctor.fees}</p>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-xl font-semibold text-gray-900'>About {doctor.name}</h2>
        <p className='text-sm text-gray-600 mt-4'>{doctor.about}</p>
      </div>

      <div className='mt-8'>
        <p className='text-lg text-gray-700 mb-4'>Choose a date and time slot to book your appointment:</p>
        <DatePicker
          selected={currentDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          className="border border-blue-500 rounded-lg px-4 py-2 mb-4 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
          {availableSlots.length > 0 ? (
            availableSlots.map((slot, index) => (
              <button
                key={index}
                className={`border py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 
                  ${selectedSlot === slot ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))
          ) : (
            <p className='text-center text-gray-600'>No available slots for this date.</p>
          )}
        </div>
      </div>

      {selectedSlot && (
        <div className='mt-8'>
          <p className='text-lg text-gray-700'>
            You have selected {selectedSlot} on {currentDate.toLocaleDateString()}.
          </p>
          <p className='text-lg font-semibold text-gray-700 mt-2'>Total Appointment Fee: ${doctor.fees}</p>
          <button
            onClick={handleBooking}
            className='mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300'
          >
            Confirm Appointment
          </button>
        </div>
      )}

      <div className='mt-12'>
        <h3 className='text-xl font-semibold text-gray-900'>Related Doctors</h3>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5'>
          {doctors
            .filter(doc => doc.speciality === doctor.speciality && doc._id !== doctorId)
            .map(item => (
              <div
                key={item._id}
                className='border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-300'
                onClick={() => {
                  navigate(`/appointment/${item._id}`, { state: item });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <img
                  className='w-full h-48 object-cover bg-blue-50'
                  src={item.image}
                  alt={item.name}
                />
                <div className='p-4'>
                  <p className='text-lg font-medium text-gray-900'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
