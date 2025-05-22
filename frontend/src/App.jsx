import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import News from './pages/News';
import Doctor from './pages/Doctors';
import About from './pages/About';

import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

// Login Pages
import PatientLogin from './pages/PatientLogin';
import DoctorLogin from './pages/DoctorLogin';
import AdminLogin from './pages/AdminLogin';

// Signup Pages
import DoctorSignup from './pages/signup/DoctorSignup';
import AdminSignup from './pages/signup/AdminSignup';
import PatientSignup from './pages/signup/PatientSignup';
import BookAppointmentPage from './pages/BookAppointmentPage';

// Dashboards
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Appointments from './pages/patient/Appointment';
import MedicalRecords from './pages/patient/MedicalRecord';
import Prescriptions from './pages/patient/Prescriptions';
import Messages from './pages/patient/Messages';
import ViewMessage from './pages/patient/ViewMessage';
import Notification from './pages/patient/Notification';
import ViewNotification from './pages/patient/ViewNotification';
import Billing from './pages/patient/Billing';
import PaymentDetails from './pages/patient/PaymentDetails';
import Profile from './pages/patient/Profile';

import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const location = useLocation(); // 👈 Important

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <ScrollToTop />
      <Navbar />

      {/* AnimatePresence wraps Routes */}
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/doctors/:speciality" element={<Doctor />} />
            <Route path="/about-us" element={<About />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment/:doctorId" element={<Appointment />} />

            {/* Login Pages */}
            <Route path="/login/patient" element={<PatientLogin />} />
            <Route path="/login/doctor" element={<DoctorLogin />} />
            <Route path="/login/admin" element={<AdminLogin />} />

            {/* Protected Dashboard Pages */}
            <Route path="/patient/dashboard" element={<PrivateRoute element={<PatientDashboard />} allowedRole="Patient" />} />
            <Route path="/patient/appointments" element={<Appointments />} />
            <Route path="/patient/records" element={<MedicalRecords />} />
            <Route path="/patient/prescriptions" element={<Prescriptions />} />
            <Route path="/patient/messages" element={<Messages />} />
            <Route path="/patient/messages/:id" element={<ViewMessage />} />
            <Route path="/patient/notifications" element={<Notification />} />
            <Route path="/patient/notifications/:id" element={<ViewNotification />} />
            <Route path="/patient/billing" element={<Billing />} />
            <Route path="/patient/billing/:id" element={<PaymentDetails />} />
            <Route path='/patient/profile' element={<Profile />} />

            <Route path="/doctor/dashboard" element={<PrivateRoute element={<DoctorDashboard />} allowedRole="Doctor" />} />
            <Route path="/admin/dashboard" element={<PrivateRoute element={<AdminDashboard />} allowedRole="Admin" />} />

            {/* Signup Pages */}
            <Route path="/signup/patient" element={<PatientSignup />} />
            <Route path="/signup/doctor" element={<DoctorSignup />} />
            <Route path="/signup/admin" element={<AdminSignup />} />

            {/* BookAppointment */}
            <Route path="/book-appointment" element={<BookAppointmentPage />} />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default App;
