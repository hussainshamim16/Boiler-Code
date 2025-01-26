import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
   const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });

    if (email == "admin@gmail.com" && password == "admin") {
      alert("Admin Login Successful!")
      localStorage.setItem('admin',true)
      navigate("/dashboard");
    } else {
      alert("Admin Login Failed!")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-600 px-3">
      <div className="card w-96 bg-white sha  dow-xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">ADMIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full mt-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full mt-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
