import React, { useState } from 'react';
import axios  from 'axios';


const BeneficiaryForm = () => {
  // State hooks for each field in the form
  const [cnic, setCnic] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [purpose, setPurpose] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Log the form data (this can be replaced with an API call)
    console.log({ cnic, name, phone, address, purpose });
    const beneficial = {
      cnic,
      name,
      phone,
      address,
      purpose
    }
    try {
      // Axios POST request to backend API
      const response = await axios.post('http://localhost:3000/api/register', beneficial);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error in saving data');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-600 px-3">
      <div className="card w-full sm:w-7/12 bg-white shadow-xl p-8 mt-5">
        <h2 className="text-2xl font-semibold text-center mb-6">Beneficiary Form</h2>
        <form onSubmit={handleSubmit}>
          {/* CNIC Field */}
          <div className="mb-4">
            <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              className="input input-bordered w-full mt-2"
              placeholder="Enter your CNIC"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              required
            />
          </div>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full mt-2"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="input input-bordered w-full mt-2"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="input input-bordered w-full mt-2"
              placeholder="Enter your address"
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
              placeholder="Enter the purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              required
            />
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

export default BeneficiaryForm;
