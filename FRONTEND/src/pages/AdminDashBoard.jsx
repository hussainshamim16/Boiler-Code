import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function AdminDashBoard() {
  const navigate = useNavigate();
  useEffect(() => {
    const check = localStorage.getItem('admin');
    if (!check) {
      navigate(''); // Redirect to /admin page
      navigate('/admin'); // Redirect to /admin page
    }
  }, [navigate]); 

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-5">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <ul className="mt-10 space-y-4">
          <li><a href="#" className="block p-2 hover:bg-gray-700">Dashboard</a></li>
          <li><a href="#" className="block p-2 hover:bg-gray-700">Users</a></li>
          <li><a href="#" className="block p-2 hover:bg-gray-700">Settings</a></li>
          <li><a href="#" className="block p-2 hover:bg-gray-700">Reports</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <h1 className="text-2xl font-semibold">Welcome to the Admin Panel</h1>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="card w-full bg-white shadow-md rounded-lg p-5">
            <h3 className="text-xl font-semibold">Users</h3>
            <p className="mt-2">Manage your users.</p>
            <button className="btn btn-primary mt-4">View Users</button>
          </div>

          {/* Card 2 */}
          <div className="card w-full bg-white shadow-md rounded-lg p-5">
            <h3 className="text-xl font-semibold">Settings</h3>
            <p className="mt-2">Update your settings.</p>
            <button className="btn btn-primary mt-4">Go to Settings</button>
          </div>

          {/* Card 3 */}
          <div className="card w-full bg-white shadow-md rounded-lg p-5">
            <h3 className="text-xl font-semibold">Reports</h3>
            <p className="mt-2">View detailed reports.</p>
            <button className="btn btn-primary mt-4">View Reports</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
