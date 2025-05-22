import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const iconList = [
    { icon: <FaFacebookF />, link: 'https://facebook.com' },
    { icon: <FaTwitter />, link: 'https://twitter.com' },
    { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
    { icon: <FaInstagram />, link: 'https://instagram.com' },
    { icon: <FaWhatsapp />, link: 'https://wa.me/2348098986274' },
  ];

  return (
    <div className='md:mx-10 px-4 sm:px-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Left section */}
        <div>
          <div className="text-xl font-bold bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700 animate-gradient-x bg-clip-text text-transparent">
            <NavLink to="/">HealthBridge</NavLink>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6 mt-2">
            Bridging the gap between patients and quality care, <strong>HealthBridge</strong> offers a seamless, secure, and human-centered healthcare experience. From booking appointments to connecting with trusted professionals, we make healthcare more accessible, personalized, and empowering.
          </p>
        </div>


        {/* Center section */}
        <div>
          <p className='text-xl font-medium mb-5 bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700 animate-gradient-x bg-clip-text text-transparent'>
            COMPANY
          </p>

          <ul className='flex flex-col gap-2 text-gray-900'>
            <li>
              <NavLink to="/" className='hover:text-purple-700 transition duration-300'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className='hover:text-purple-700 transition duration-300'>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='hover:text-purple-700 transition duration-300'>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" className='hover:text-purple-700 transition duration-300'>
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <p className='text-xl font-medium mb-5 bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700 animate-gradient-x bg-clip-text text-transparent'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2'>
            <li>
              <a href="https://wa.me/2348098986274" target="_blank" rel="noreferrer" className='text-gray-600 hover:text-purple-700 transition duration-300'>
                +234 809 8986 274
              </a>
            </li>
            <li>
              <a href="mailto:bigmoerell@gmail.com" className='text-gray-600 hover:text-purple-700 transition duration-300'>
                bigmoerell@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons with the hr line */}
      <div className='relative mt-10 flex justify-center items-center'>
        {/* Line (hr) positioned absolutely behind the icons */}
        <hr className='absolute top-1/2 w-full border-t border-gray-300 z-0' />

        {/* Icons placed above the line */}
        <div className='flex justify-center gap-5 z-10 bg-white px-4'>
          {iconList.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target='_blank'
              rel='noreferrer'
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='text-purple-700 text-xl cursor-pointer hover:drop-shadow-md'
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div>
        <p className='py-5 text-sm text-center'>
          Copyright 2025 @HealthBridge - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
