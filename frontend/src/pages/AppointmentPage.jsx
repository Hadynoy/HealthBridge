import React from 'react'
import { useParams } from 'react-router-dom';  // To get the doctorId from the URL
import { doctors } from '../data/DoctorsData';

const AppointmentPage = () => {
  const { doctorId } = useParams();  // Get the doctorId from the URL
  const doctor = doctors.find(doc => doc.id === parseInt(doctorId));  // Find the doctor by ID

  if (!doctor) {
    return <p>Doctor not found!</p>;
  }

  return (
    <div className='appointment-page'>
      <h1>Schedule an Appointment with Dr. {doctor.name}</h1>
      <p>Speciality: {doctor.speciality}</p>
      <img src={doctor.image} alt={doctor.name} />
      <div className='appointment-form'>
        <button>Schedule Appointment</button>
      </div>
    </div>
  )
}

export default AppointmentPage;
