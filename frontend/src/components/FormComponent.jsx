import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    vaccineName: '',
    manufacturerName: '',
    vaccineType: '',
    dateOfExpiry: '',
    batchNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataJson = JSON.stringify(formData);
    console.log(formDataJson);
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vaccineName">
            Vaccine Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="vaccineName"
            type="text"
            placeholder="Vaccine Name"
            name="vaccineName"
            value={formData.vaccineName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="manufacturerName">
            Manufacturer Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="manufacturerName"
            type="text"
            placeholder="Manufacturer Name"
            name="manufacturerName"
            value={formData.manufacturerName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vaccineType">
            Vaccine Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="vaccineType"
            type="text"
            placeholder="Vaccine Type"
            name="vaccineType"
            value={formData.vaccineType}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfExpiry">
            Date of Expiry
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dateOfExpiry"
            type="date"
            placeholder="Date of Expiry"
            name="dateOfExpiry"
            value={formData.dateOfExpiry}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="batchNumber">
            Batch Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="batchNumber"
            type="text"
            placeholder="Batch Number"
            name="batchNumber"
            value={formData.batchNumber}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
