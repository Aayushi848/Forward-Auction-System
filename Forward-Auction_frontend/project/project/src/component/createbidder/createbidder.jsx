import React from 'react';

export default function AddBidderForm() {
  return (
    <div className="m-6">
      {/* Breadcrumb - OUTSIDE the white box */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <span className="text-blue-600 font-semibold">Home</span>
        <span className="text-black mx-2">/</span>
        <span className="font-medium">Create Auction</span>
      </div>

      {/* Main Form Card */}
      <div className="p-6 shadow-lg rounded-2xl bg-white">
        <h3 className="text-2xl font-bold mb-6">Add New Bidder</h3>
        

        <form className="space-y-8">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium">Company Name*</label>
              <input className="w-full shadow rounded px-4 py-2 mt-1" placeholder="Company Name*" />
            </div>
            <div>
              <label className="block text-sm font-medium">Sap Code*</label>
              <input className="w-full shadow rounded px-4 py-2 mt-1" placeholder="Sap Code*" />
            </div>
            <div>
              <label className="block text-sm font-medium">Country*</label>
              <select className="w-full shadow rounded px-4 py-2 mt-1">
                <option>--Select--</option>
                <option>India</option>
                <option>USA</option>
                <option>Nepal</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium">State*</label>
              <select className="w-full shadow rounded px-4 py-2 mt-1">
                <option>--Select--</option>
                  <option>Chattisgarh</option>
                <option>Orrisa</option>
                <option>Gujrat</option>
                <option>Karnataka</option>
                <option>Madhya Pradesh</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">City*</label>
              <select className="w-full shadow rounded px-4 py-2 mt-1">
                <option>--Select--</option>
                <option>Raigarh</option>
                <option>Korba</option>
                <option>Sakti</option>
                <option>Raipur</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Postal Code*</label>
              <input className="w-full shadow rounded px-4 py-2 mt-1" placeholder="Enter the Postal Code" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium">Contact Person*</label>
              <input className="w-full shadow rounded px-4 py-2 mt-1" placeholder="Contact Person" />
            </div>
            <div>
              <label className="block text-sm font-medium">Mobile No.*</label>
              <input className="w-full shadow rounded px-4 py-2 mt-1" placeholder="Mobile No." />
            </div>
            <div>
              <label className="block text-sm font-medium">Bidder Document</label>
              <input type="file" className="w-full shadow rounded px-4 py-1.5 mt-1" />
            </div>
          </div>

        {/* Section: Other Details */}
<h3 className="text-xl font-semibold">Other Details</h3>
<hr className="my-6 shadow-t border-gray-300" />

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="flex flex-col">
    <label className="block text-sm font-medium">Address Line 1</label>
    <input className="w-full shadow rounded px-4 py-2 mt-1" placeholder="Address Line 1*" />
  </div>
  <div className="flex flex-col">
    <label className="block text-sm font-medium">Address Line 2</label>
    <input className="w-full shadow rounded px-4 py-2 mt-1" placeholder="Address Line 2" />
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  <div className="flex flex-col">
    <label className="block text-sm font-medium">Telephone No.</label>
    <input className="w-full shadow rounded px-4 py-2 mt-1" placeholder="Telephone No." />
  </div>
  <div className="flex flex-col">
    <label className="block text-sm font-medium">Close Date</label>
    <input className="w-full shadow rounded px-4 py-2 mt-1" type="date" />
  </div>
  <div className="flex flex-col">
    <label className="block text-sm font-medium">Fax</label>
    <input className="w-full shadow rounded px-4 py-2 mt-1" placeholder="Fax" />
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  <div className="flex flex-col">
    <label className="block text-sm font-medium">Bidder Category*</label>
    <select className="w-full shadow rounded px-4 py-2 mt-1">
      <option>--Select--</option>
      <option>Plates-upto 20mm</option>
      <option>Plates-20 to 40mm</option>
      <option>Plates-upto 40mm</option>
      <option>Plates-above 40mm</option>
      <option>Plate Mix</option>
      <option>Coils-upto 12mm</option>
    </select>
  </div>
  <div className="flex flex-col">
    <label className="block text-sm font-medium">Is Guest Bidder</label>
    <input className="w-full shadow rounded px-4 py-2 mt-1" placeholder="Is Guest Bidder" disabled />
  </div>
  <div className="flex flex-col">
    <label className="block text-sm font-medium">Email</label>
    <input className="w-full shadow rounded px-4 py-2 mt-1" placeholder="Email ID" />
  </div>
</div>


          {/* Section: Additional Information */}
          <h3 className="text-xl font-semibold">Additional Information</h3>
          <hr className="my-6 shadow-t border-gray-300" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div> 
               <label className="block text-sm font-medium">CST *</label>
              <input className="shadow rounded px-4 py-2" placeholder="CST" /></div>
           
           <div>
             <label className="block text-sm font-medium">LST (GST Tin no.) *</label>
             <input className="shadow rounded px-4 py-2" placeholder="LST (GST Tin no.) " />
             </div> 
            <div>
               <label className="block text-sm font-medium">Service Tax No. *</label>
              <input className="shadow rounded px-4 py-2" placeholder="Service Tax No." />
              </div>
            <div>
               <label className="block text-sm font-medium">Ecc No. *</label>
              <input className="shadow rounded px-4 py-2" placeholder="ECC No." />
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium">ECC Reg No. *</label>
                <input className="shadow rounded px-4 py-2" placeholder="ECC Reg No." />
            </div>
          <div>
            <label className="block text-sm font-medium">Range *</label>
             <input className="shadow rounded px-4 py-2" placeholder="Range" />
          </div>
           <div>
            <label className="block text-sm font-medium">Pan No. *</label>
             <input className="shadow rounded px-4 py-2" placeholder="Pan No." />
           </div>
           <div>
            <label className="block text-sm font-medium">Commissionerate *</label>
             <input className="shadow rounded px-4 py-2" placeholder="Commissionerate" />
           </div>
           
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 pt-6">
            <button className="bg-green-600 text-white px-6 py-2 rounded">Submit</button>
            <button className="bg-red-500 text-white px-6 py-2 rounded">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
