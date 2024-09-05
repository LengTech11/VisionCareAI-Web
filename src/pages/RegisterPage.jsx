import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import RegisterForm from '../components/auth_components/RegisterForm';

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    phone_number: '',
    gender: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-md sm:max-w-xs w-full">
        <div className="w-full p-8">
          <p className="text-xl text-gray-600 text-center">Create an Account</p>
          {message && <p className="text-red-500 text-center mb-4">{message}</p>}
          <RegisterForm
            formData={formData}
            setFormData={setFormData}
            setMessage={setMessage}
            navigate={navigate}
          />
          <div className="mt-4 flex items-center w-full text-center">
            <p className="text-xs text-gray-500 capitalize text-center w-full">
              Already have an account?
              <Link to="/login" className="text-blue-700"> Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
