import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home'; // Static import for Home

// Lazy loaded pages
const News = lazy(() => import('./pages/News'));
const Doctor = lazy(() => import('./pages/Doctors'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Appointment = lazy(() => import('./pages/Appointment'));

// Login Pages
const PatientLogin = lazy(() => import('./pages/PatientLogin'));
const DoctorLogin = lazy(() => import('./pages/DoctorLogin'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));

// Signup Pages
const DoctorSignup = lazy(() => import('./pages/signup/DoctorSignup'));
const AdminSignup = lazy(() => import('./pages/signup/AdminSignup'));
const PatientSignup = lazy(() => import('./pages/signup/PatientSignup'));
const BookAppointmentPage = lazy(() => import('./pages/BookAppointmentPage'));

// Dashboards
const PatientDashboard = lazy(() => import('./pages/PatientDashboard'));
const DoctorDashboard = lazy(() => import('./pages/DoctorDashboard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const Appointments = lazy(() => import('./pages/patient/Appointment'));
const MedicalRecords = lazy(() => import('./pages/patient/MedicalRecord'));
const Prescriptions = lazy(() => import('./pages/patient/Prescriptions'));
const Messages = lazy(() => import('./pages/patient/Messages'));
const ViewMessage = lazy(() => import('./pages/patient/ViewMessage'));
const Notification = lazy(() => import('./pages/patient/Notification'));
const ViewNotification = lazy(() => import('./pages/patient/ViewNotification'));
const Billing = lazy(() => import('./pages/patient/Billing'));
const PaymentDetails = lazy(() => import('./pages/patient/PaymentDetails'));
const Profile = lazy(() => import('./pages/patient/Profile'));

import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <ScrollToTop />
      <Navbar />

      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
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
              <Route
                path="/patient/dashboard"
                element={<PrivateRoute element={<PatientDashboard />} allowedRole="Patient" />}
              />
              <Route path="/patient/appointments" element={<Appointments />} />
              <Route path="/patient/records" element={<MedicalRecords />} />
              <Route path="/patient/prescriptions" element={<Prescriptions />} />
              <Route path="/patient/messages" element={<Messages />} />
              <Route path="/patient/messages/:id" element={<ViewMessage />} />
              <Route path="/patient/notifications" element={<Notification />} />
              <Route path="/patient/notifications/:id" element={<ViewNotification />} />
              <Route path="/patient/billing" element={<Billing />} />
              <Route path="/patient/billing/:id" element={<PaymentDetails />} />
              <Route path="/patient/profile" element={<Profile />} />

              <Route
                path="/doctor/dashboard"
                element={<PrivateRoute element={<DoctorDashboard />} allowedRole="Doctor" />}
              />
              <Route
                path="/admin/dashboard"
                element={<PrivateRoute element={<AdminDashboard />} allowedRole="Admin" />}
              />

              {/* Signup Pages */}
              <Route path="/signup/patient" element={<PatientSignup />} />
              <Route path="/signup/doctor" element={<DoctorSignup />} />
              <Route path="/signup/admin" element={<AdminSignup />} />

              {/* Book Appointment */}
              <Route path="/book-appointment" element={<BookAppointmentPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default App;
