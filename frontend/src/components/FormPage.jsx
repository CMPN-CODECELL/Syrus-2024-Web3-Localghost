import React from 'react'
import FormComponent from './FormComponent'
import Navbar from './Navbar'

function FormPage() {
  return (
  <div className="h-screen bg-gradient-to-r from-indigo-200 to-teal-50">
    <Navbar/>
    <FormComponent/>
    </div>
  )
}

export default FormPage