import React from 'react'
import Navbar from './Navbar'

function Homepage() {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-200 to-teal-50">
        <Navbar/>
        <h1 className="text-3xl font-bold text-center">
        Welcome to Vaxchain
        </h1>
    </div>
  )
}

export default Homepage