import React from 'react'
import Navbar from './Navbar'

function Homepage() {
  return (<>
        <Navbar/>
        <div className='flex items-center justify-center h-screen'>
        <h1 className="text-8xl font-bold text-center">
          Welcome to Vaxchain
        </h1>
      </div>
      </>
  )
}

export default Homepage