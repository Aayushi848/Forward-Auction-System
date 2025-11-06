import React, { useState } from 'react';

const ChangePassword = () => {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleCancel = () => {
    setForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
     <div className="bg-white p-4 rounded shadow mb-4">
        <span className="text-blue-600 font-semibold">Home</span>
        <span className="text-black mx-2">/</span>
        <span className="font-medium">Change Password</span>
      </div>

      {/* Card */}
      <div className="bg-white shadow rounded-xl">
        <div className="border-b px-6 py-4 text-xl font-semibold text-gray-800">Reset Your Password</div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Current Password */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Cureent Password*</label>
              <input
                type="password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                placeholder="Auction Name"
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            {/* New Password */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">New Password*</label>
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                placeholder="Auction Name"
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Conform Password*</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Auction Name"
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded text-sm"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
