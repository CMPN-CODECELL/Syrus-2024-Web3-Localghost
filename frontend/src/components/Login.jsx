import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import Navbar from './Navbar';

const Login = () => {
  const navigate = useNavigate();
  const [web3, setWeb3] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');
  const [error, setError] = useState('');

  const handleRoleLogin = (role) => {
    setSelectedRole(role);
    console.log(selectedRole);
  };

  const handleMetaMaskLogin = async () => {
    console.log(selectedRole)
    try {
      if (!window.ethereum) {
        throw new Error('MetaMask extension not detected');
      }

      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      // Request account access
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const walletAddress = accounts[0]; // Get the first account address

      // Perform wallet address validation
      if (!walletAddress) {
        throw new Error('No wallet address found');
      }

      const isValidAddress = await validateWalletAddress(selectedRole, walletAddress);
      console.log(isValidAddress)
      if (isValidAddress) {
        setError('');
        console.log('Wallet address validation successful for role:', selectedRole);

        // Redirect based on the selected role
        if (selectedRole === 'admin') {
          navigate('/');
        } else {
          navigate('/userdashboard');
        }
      } else {
        setError('Invalid wallet address for the selected role');
      }
    } catch (error) {
      console.error('MetaMask authentication failed:', error.message);
      setError('MetaMask authentication failed');
    }
  };

  // Function to validate wallet address
  // Function to validate wallet address
const validateWalletAddress = async (role, address) => {
  // Define valid wallet addresses for each role
  const validAddresses = {
    admin: ['0x6a2e7fdfffcb45844c8482d4e828fb86ecd29fa7', /* Add more admin addresses as needed */],
    user: ['0x469cB9016ee68AAA195416708562f6D3b2e09d0D', /* Add more user addresses as needed */],
    // Add more roles and corresponding valid wallet addresses as needed
  };
  console.log("USer ka address " + address)
  console.log("Array mein address " + validAddresses[role])

  if(role === 'admin'){
    if(address === '0x6a2e7fdfffcb45844c8482d4e828fb86ecd29fa7'){
      return true;
    }
    else {
      return false
    }
  }
  else if(role === 'user'){
    if(address === '0xbdc2109abed65d2d2abd30c5882d2c854aa5a094'){
      return true;
    }
    else {
      return false
    }
  }
 
  // Check if the address is in the list of valid addresses for the selected role
  console.log(validAddresses[role].includes())
  return validAddresses[role].includes(); // Convert address to lowercase for case-insensitive comparison
};


  return (
    <div className='flex items-center  h-screen flex-col'>
      <Navbar />
      <div className="flex items-center h-screen   justify-centerbg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
          </div>
          <div className="flex justify-center w-96 space-x-4">
            <button
              onClick={() => setSelectedRole('admin')}
              className="w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login as Manufacturer
            </button>
            <button
              onClick={() => setSelectedRole('user')}
              className="w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login as User
            </button>
            {/* Add more role buttons as needed */}
          </div>
          {selectedRole && (
            <div>
              <button
                onClick={handleMetaMaskLogin}
                className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Connect MetaMask and Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;


