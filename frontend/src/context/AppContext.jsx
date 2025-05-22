import React, { createContext, useState, useEffect } from 'react';
import { doctors } from '../data/DoctorData'; // Assuming you have a DoctorData.js file containing doctor data

// Create Context
export const AppContext = createContext();

// Define AppContextProvider
const AppContextProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [user, setUser] = useState(null);  // User state to track login status

  // Load doctor data and user login state on mount
  useEffect(() => {
    setDoctorsList(doctors);

    // Check if a user is already logged in by looking in localStorage
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set the user if found in localStorage
    }

    // Load appointments from localStorage if any exist
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments)); // Set the appointments if found in localStorage
    }
  }, []); // This runs once on component mount

  useEffect(() => {
    // Sync appointments with localStorage when it changes
    if (appointments.length > 0) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    }
  }, [appointments]); // Runs every time appointments change

  // Book an appointment
  const bookAppointment = (formData) => {
    if (!user) {
      alert("You must be logged in to book an appointment.");
      return; // Do not proceed if the user is not logged in
    }

    const selectedDoctor = doctorsList.find(
      (doc) => doc._id.toString() === formData.doctorId.toString()
    );

    const newAppointment = {
      id: Date.now(), // Simple unique ID
      doctor: selectedDoctor?.name || "Unknown",
      department: selectedDoctor?.speciality || "General",
      date: formData.date,
      time: formData.time,
      status: "Upcoming",
    };

    setAppointments((prev) => [...prev, newAppointment]);
  };

  // Cancel an appointment
  const cancelAppointment = (appointmentId) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== appointmentId)
    );
  };

  // Login user and store user data in localStorage
  const loginUser = (userData) => {
    setUser(userData); // Set the logged-in user
    localStorage.setItem("userInfo", JSON.stringify(userData)); // Store user data in localStorage
  };

  // Logout user and remove user data from localStorage
  const logoutUser = () => {
    setUser(null); // Clear the user on logout
    localStorage.removeItem("userInfo"); // Remove user data from localStorage
    localStorage.removeItem("appointments"); // Clear appointments from localStorage

    // Reset appointments when the user logs out
    setAppointments([]); // Clear the appointments from state as well
  };

  const value = {
    appointments,
    setAppointments,
    bookAppointment,
    cancelAppointment,  // Expose cancelAppointment function
    doctors: doctorsList,
    user,  // Expose the user state
    loginUser,  // Function to log in
    logoutUser, // Function to log out
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
