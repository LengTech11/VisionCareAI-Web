import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LoginForm from '../components/auth_components/LoginForm';

const LoginPage = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          {message && <p className="text-red-500 text-center mb-4">{message}</p>}
          <LoginForm setMessage={setMessage} navigate={navigate} />
          <div className="mt-4 flex items-center w-full text-center">
            <p className="text-xs text-gray-500 capitalize text-center w-full">
              Don&apos;t have an account yet?
              <Link to="/register" className="text-blue-700"> Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
