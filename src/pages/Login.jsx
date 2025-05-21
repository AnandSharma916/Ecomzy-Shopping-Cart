import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }
    toast.success('Login successful!');
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Glassmorphism Card with updated size */}
      <div className="relative z-10 backdrop-blur-md bg-white/80 p-10 rounded-2xl shadow-2xl w-full max-w-lg animate-fadeIn">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331943.png"
            alt="Promopact Logo"
            className="w-16 h-16 mb-2"
          />
          <h1 className="text-2xl font-bold text-cyan-800 text-center">
            Promopact Marketing India Pvt Ltd
          </h1>
          <p className="text-sm text-gray-700 mt-1 text-center">
            Welcome back! Login to your e-commerce dashboard
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              <label className="text-sm text-gray-600">Show Password</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            SIGN IN
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-sm text-center mt-4">
          <button className="text-cyan-700 underline hover:text-cyan-900 transition">
            Forgot Username / Password?
          </button>
        </div>
        <div className="text-sm text-center mt-2 text-gray-700">
          Don’t have an account?{' '}
          <button className="text-cyan-700 underline hover:text-cyan-900 transition">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
