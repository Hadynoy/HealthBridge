import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password });
        if (data.success) {
          localStorage.setItem('aToken', data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        // Implement logic for Doctor login if needed
      }
    } catch (error) {
      toast.error('Something went wrong, please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f4f7fc]">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 transition-all duration-300 hover:shadow-xl"
      >
        <div className="text-center mb-6">
          <p className="text-3xl font-semibold text-[#2c3e50]">
            <span className="text-purple-700">{state}</span> Login
          </p>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-[#34495e] font-medium mb-2">
            Email Address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            type="email"
            required
            className="w-full p-3 border border-purple-700 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-700 transition duration-300 ease-in-out"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-[#34495e] font-medium mb-2">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="password"
            type="password"
            required
            className="w-full p-3 border border-purple-700 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-700 transition duration-300 ease-in-out"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-6">
          <button className="w-full py-3 bg-purple-700 text-white rounded-md hover:bg-purple-500 transition duration-200 ease-in-out">
            Login
          </button>
        </div>
        <div className="text-center">
          {state === 'Admin' ? (
            <p className="text-sm text-[#7f8c8d]">
              Doctor Login?{' '}
              <span
                onClick={() => setState('Doctor')}
                className="text-purple-700 cursor-pointer hover:underline"
              >
                Click here
              </span>
            </p>
          ) : (
            <p className="text-sm text-[#7f8c8d]">
              Admin Login?{' '}
              <span
                onClick={() => setState('Admin')}
                className="text-purple-700 cursor-pointer hover:underline"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
