import React, { useEffect } from 'react';
import Navbar from './Navbar';

function Homepage() {   
  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center h-screen'>
        <h1 className="text-8xl font-bold text-center">
          Welcome to Vaxchain
        </h1>
      </div>
    </>
  );
}

export default Homepage;
