import React, { useState } from 'react';
import axios  from 'axios';

const DepartmentForm = () => {
  // State hooks for each field in the form
  const [token, setToken] = useState('');
  const [cnic, setCnic] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [purpose, setPurpose] = useState('');
  const [action, setAction] = useState('');
  const [remarks, setRemarks] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Log the form data (this can be replaced with an API call)
    const departmentData = { token, cnic, name, phone, address, purpose, action, remarks };
    console.log(departmentData);
    // Make API call here if needed

    const depa = {
      token,
      cnic,
      name,
      phone,
      address,
      purpose,
      action,
      remarks,
    }

    try {
      const response = await axios.post('http://localhost:3000/api/department', depa);
      alert(response.data.message);
    } catch (error) {
      console.error('Error:', error.response || error.message);
      alert('Error in saving data');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-600 px-3">
      <div className="card w-full sm:w-7/12 bg-white shadow-xl p-8 mt-5">
        <h2 className="text-2xl font-semibold text-center mb-6">Department Interaction Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Token Field */}
          <div className="mb-4">
            <label htmlFor="token" className="block text-sm font-medium text-gray-700">
              Token
            </label>
            <input
              type="text"
              id="token"
              className="input input-bordered w-full mt-2"
              placeholder="Enter the token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </div>

          {/* Beneficiary CNIC Field */}
          <div className="mb-4">
            <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              className="input input-bordered w-full mt-2"
              placeholder="Enter beneficiary CNIC"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              required
            />
          </div>

          {/* Beneficiary Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full mt-2"
              placeholder="Enter beneficiary name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Beneficiary Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="input input-bordered w-full mt-2"
              placeholder="Enter beneficiary phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Beneficiary Address Field */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="input input-bordered w-full mt-2"
              placeholder="Enter beneficiary address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* Purpose Field */}
          <div className="mb-4">
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
              Purpose
            </label>
            <input
              type="text"
              id="purpose"
              className="input input-bordered w-full mt-2"
              placeholder="Enter the purpose of assistance"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              required
            />
          </div>

          {/* Action Field */}
          <div className="mb-4">
            <label htmlFor="action" className="block text-sm font-medium text-gray-700">
              Action
            </label>
            <input
              type="text"
              id="action"
              className="input input-bordered w-full mt-2"
              placeholder="Enter action taken"
              value={action}
              onChange={(e) => setAction(e.target.value)}
              required
            />
          </div>

          {/* Remarks Field */}
          <div className="mb-4">
            <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">
              Remarks
            </label>
            <textarea
              id="remarks"
              className="textarea textarea-bordered w-full mt-2"
              placeholder="Enter remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepartmentForm;
