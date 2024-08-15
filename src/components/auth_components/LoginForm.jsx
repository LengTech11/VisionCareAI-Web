import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setMessage, navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
      setMessage(response.data.message);
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirect to /home on success
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
        <input
          className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <div className="flex justify-between">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        </div>
        <input
          className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a
          href="#"
          className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
        >
          Forgot Password?
        </a>
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
      <a
        href="#"
        className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
      >
        <div className="flex px-5 justify-center w-full py-3">
          <div className="min-w-[30px]">
            <svg className="h-6 w-6" viewBox="0 0 40 40">
              {/* SVG paths here */}
            </svg>
          </div>
          <div className="flex w-full justify-center">
            <h1 className="whitespace-nowrap text-gray-600 font-bold">
              Sign in with Google
            </h1>
          </div>
        </div>
      </a>
    </form>
  );
};

export default LoginForm;
