import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            We are a dedicated team of professionals committed to improving public health through the effective tracking and management of vaccines. Our mission is to provide innovative solutions that streamline the distribution, administration, and monitoring of vaccines, ultimately contributing to the eradication of preventable diseases.
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-200 to-green-300 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-700">
            Our vision is a world where every individual has access to safe and effective vaccines, and where vaccination programs are efficiently managed to achieve maximum impact on public health.
          </p>
        </div>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-2">Our Values</h2>
          <ul className="list-disc pl-6">
            <li className="text-gray-700 mb-2">Commitment to excellence</li>
            <li className="text-gray-700 mb-2">Integrity and transparency</li>
            <li className="text-gray-700 mb-2">Collaboration and partnership</li>
            <li className="text-gray-700 mb-2">Innovation and continuous improvement</li>
            <li className="text-gray-700 mb-2">Empathy and compassion</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or inquiries, please feel free to contact us at <a href="mailto:info@vaccinetrackingsystem.com" className="text-blue-500">info@vaccinetrackingsystem.com</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
