import React from 'react';
import axios from 'axios';

const RegisterForm = ({ formData, setFormData, setMessage, navigate }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
      setMessage(response.data.message);
      navigate('/');
    } catch (error) {
      setMessage('Registration failed. Please check your details.');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="mt-4 flex flex-col space-y-4">
        <div className="flex space-x-4">
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
            <input
              name="first_name"
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <input
              name="last_name"
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
          <input
            name="email"
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex space-x-4">
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
            <input
              name="age"
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <select
              name="gender"
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            name="password"
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
