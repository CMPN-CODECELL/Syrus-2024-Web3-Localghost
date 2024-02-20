import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [role, setRole] = useState('');

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        try {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setAccounts(accounts);
          // Check user's role based on their Ethereum address
          const userRole = await fetchUserRole(accounts[0]);
          setRole(userRole);
        } catch (error) {
          console.error('MetaMask authentication failed:', error);
        }
      } else {
        console.error('MetaMask extension not detected');
      }
    };

    loadWeb3();
  }, []);

  const fetchUserRole = async (account) => {
    // Placeholder function to fetch user role from your backend or decentralized storage
    // You would need to implement this function to query user roles based on their Ethereum address
    // Return user role (e.g., 'admin', 'user')
    return 'admin'; // Placeholder role for demonstration
  };

  const handleLogout = () => {
    // Clear user data on logout
    setAccounts([]);
    setRole('');
  };

  return (
    <div>
      {accounts.length === 0 ? (
        <button onClick={() => window.ethereum.request({ method: 'eth_requestAccounts' })}>
          Connect MetaMask
        </button>
      ) : (
        <div>
          <p>Logged in as: {accounts[0]}</p>
          <p>Role: {role}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
