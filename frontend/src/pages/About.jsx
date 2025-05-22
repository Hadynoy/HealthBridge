import React from 'react'
import about_image from '../assets/about_image.webp'
import { Clock, Smartphone, User } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom' 

const About = () => {
  const navigate = useNavigate(); 

  return (
    <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      <motion.div 
        className="text-center text-3xl pt-12 text-purple-700 font-bold tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>ABOUT <span className="text-gray-800">US</span></p>
      </motion.div>

      
      <motion.div 
        className="my-12 flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          className="w-full md:max-w-[360px]"
          src={about_image}
          alt="Doctors interacting with a patient at HealthBridge Hospital"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          className="text-[15px] leading-relaxed md:w-2/4 text-gray-600 flex flex-col gap-6"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            At <strong>HealthBridge Hospital</strong>, we are dedicated to providing accessible, efficient, and compassionate healthcare services. From in-person visits to telemedicine, our platform simplifies the way patients connect with medical professionals and manage their health needs.
          </p>
          <p>
            We combine modern technology with personalized care, ensuring every patient receives timely, high-quality medical attention — no matter where they are. Our platform allows users to easily book appointments, view doctor profiles, and securely manage their medical records, all in one place.
          </p>
          <div>
            <b className="text-gray-800 text-base">Our Vision</b>
            <p>
              With a team of certified doctors, advanced facilities, and a strong commitment to innovation, HealthBridge is more than a hospital — it’s a movement toward smarter, patient-centered healthcare. Our vision is to bridge the gap between people and the care they need, using technology to create a future where healthcare is always within reach.
            </p>
          </div>
        </motion.div>
      </motion.div>

      
      <hr className="border-t border-gray-300 my-12" />

      
      <motion.div
        className="text-center text-xl mb-6 text-gray-600"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        
        <motion.div 
          className="hover:scale-105 transform border px-10 py-10 flex flex-col gap-5 text-[15px] hover:bg-purple-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Clock size={32} className="text-purple-600 hover:text-white transition-all duration-300" />
          <b className="text-base">Efficiency</b>
          <p>
            From booking to consultation, our system is designed to save you time. We streamline every process so you can focus more on your health and less on the hassle.
          </p>
        </motion.div>

        
        <motion.div 
          className="hover:scale-105 transform border px-10 py-10 flex flex-col gap-5 text-[15px] hover:bg-purple-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Smartphone size={32} className="text-purple-600 hover:text-white transition-all duration-300" />
          <b className="text-base">Convenience</b>
          <p>
            Whether you're at home or on the go, you can connect with healthcare professionals anytime, anywhere. Healthcare has never been this easy.
          </p>
        </motion.div>

        
        <motion.div 
          className="hover:scale-105 transform border px-10 py-10 flex flex-col gap-5 text-[15px] hover:bg-purple-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <User size={32} className="text-purple-600 hover:text-white transition-all duration-300" />
          <b className="text-base">Personalization</b>
          <p>
            We understand that no two patients are the same. Our platform adapts to your preferences, offering care that fits your unique health journey.
          </p>
        </motion.div>
      </div>

      
      <motion.div 
        className="text-center mt-16 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 mb-4 text-lg">Ready to experience better healthcare?</p>
        
        <button
          onClick={() => {
            navigate('/signup/patient');
            window.scrollTo(0, 0);
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition duration-300"
        >
          Get Started
        </button>
      </motion.div>
    </div>
  )
}

export default About
