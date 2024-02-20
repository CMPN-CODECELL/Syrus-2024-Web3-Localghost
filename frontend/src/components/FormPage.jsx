import React,{ useEffect }  from 'react'
import FormComponent from './FormComponent'
import Navbar from './Navbar'

function FormPage() {
  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
  <div className="h-screen bg-gradient-to-r from-indigo-200 to-teal-50">
    <Navbar/>
    <FormComponent/>
    </div>
  )
}

export default FormPage