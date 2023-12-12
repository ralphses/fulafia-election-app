import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add authentication logic here (e.g., API call to validate credentials)

    // For demonstration purposes, log the entered credentials
    console.log('Username:', credentials.username);
    console.log('Password:', credentials.password);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-bold text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-bold text-white bg-indigo-600 rounded-lg focus:outline-none hover:bg-indigo-700"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
