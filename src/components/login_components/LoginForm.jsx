// src/components/LoginForm.js
import React from 'react';

const LoginForm = ({ email, password, setEmail, setPassword, handleLogin }) => {
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
    </form>
  );
};

export default LoginForm;
