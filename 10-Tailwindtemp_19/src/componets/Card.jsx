import React from 'react'

const Card = () => {
  return (
   <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto mt-8">
    <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
    <p className="text-gray-700 mb-4">
      This is a basic React + Tailwind CSS template. Start building your awesome UI!
    </p>
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
      Get Started
    </button>
  </div>
  )
}

export default Card
