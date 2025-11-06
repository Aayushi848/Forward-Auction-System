import React, { useState } from 'react';

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNo: '',
    phoneNo: '',
    loginName: '',
    email: '',
    gender: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    pinCode: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      mobileNo: '',
      phoneNo: '',
      loginName: '',
      email: '',
      gender: '',
      address1: '',
      address2: '',
      country: '',
      state: '',
      pinCode: '',
      role: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // API call here
  };

  return (
    <div className="p-6 bg-[#f4f6fb] min-h-screen">
      {/* Breadcrumb */}
<div className="bg-white p-4 rounded shadow mb-4">
        <span className="text-blue-600 font-semibold">Home</span>
        <span className="text-black mx-2">/</span>
        <span className="font-medium">Add user</span>
      </div>

      {/* Card */}
      <div className="bg-white rounded-md shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#151A40] mb-4">For Only User</h2>

        <h3 className="text-md font-semibold text-[#7C3AED] mb-4">Contact Details</h3>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name*</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Last Name*</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mobile No.*</label>
            <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange}
              placeholder="Enter mobile no."
              className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone No.*</label>
            <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange}
              placeholder="Enter phone no."
              className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Login Name*</label>
            <input type="text" name="loginName" value={formData.loginName} onChange={handleChange}
              placeholder="Enter login name"
              className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email ID*</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              placeholder="Enter email"
              className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Gender*</label>
            <select name="gender" value={formData.gender} onChange={handleChange}
              className="w-full border rounded px-3 py-2">
              <option value="">--Select--</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address 1*</label>
            <input type="text" name="address1" value={formData.address1} onChange={handleChange}
              placeholder="Address"
              className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address 2</label>
            <input type="text" name="address2" value={formData.address2} onChange={handleChange}
              placeholder="Address"
              className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Country*</label>
            <select name="country" value={formData.country} onChange={handleChange}
              className="w-full border rounded px-3 py-2">
              <option value="">--Select--</option>
              <option>India</option>
              <option>Australia</option>
              <option>Singapore</option>
               <option>Thailand</option>
              <option>Ukraine</option>
              <option>Nepal</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">State*</label>
            <select name="state" value={formData.state} onChange={handleChange}
              className="w-full border rounded px-3 py-2">
              <option value="">--Select State--</option>
              <option>Delhi</option>
              <option>Gurugram</option>
              
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pin Code*</label>
            <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange}
              placeholder="Pin Code"
              className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Role*</label>
            <select name="role" value={formData.role} onChange={handleChange}
              className="w-full border rounded px-3 py-2">
              <option value="">Select Options</option>
              <option>Admin</option>
              <option>User</option>
              <option>Manager</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="col-span-1 md:col-span-3 flex justify-end space-x-3 mt-4">
            <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded">Submit</button>
            <button type="button" onClick={handleReset} className="bg-gray-800 text-white px-6 py-2 rounded">Rest</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
