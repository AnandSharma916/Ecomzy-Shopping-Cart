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
    // TODO: Send login credentials to backend API
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Glassmorphic Card with Top Spacing */}
      <div className="relative z-10 w-full max-w-md p-8 mt-16 shadow-xl bg-white/80 backdrop-blur-md rounded-2xl animate-fadeIn">
        {/* Logo and Title */}
        <div className="mb-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331943.png"
            alt="Promopact Logo"
            className="w-16 h-16 mx-auto mb-3"
          />
          <h2 className="text-2xl font-bold text-blue-800">
            Promopact Marketing India Pvt Ltd
          </h2>
          <p className="mt-1 text-sm text-gray-700">
            Welcome back! Login to your e-commerce dashboard
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 transition border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 transition border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">Show Password</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition duration-300 bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        {/* Links */}
        <div className="mt-5 text-sm text-center text-gray-700">
          <button className="text-blue-700 transition hover:underline">
            Forgot Username / Password?
          </button>
        </div>
        <div className="mt-2 text-sm text-center text-gray-700">
          Don’t have an account?{' '}
          <a
            href="/register"
            className="font-medium text-blue-700 transition hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
