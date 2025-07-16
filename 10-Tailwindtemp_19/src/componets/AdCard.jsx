import React from 'react'

const AdCard = () => {
  return (
   <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-xl p-6 max-w-md mx-auto mt-8 flex flex-col items-center text-white">
     <img
       src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=400&q=80"
       alt="Ad Banner"
       className="rounded-lg w-full h-40 object-cover mb-4"
     />
     <h3 className="text-2xl font-bold mb-2">Special Offer!</h3>
     <p className="mb-4 text-center">
       Get 50% off your first purchase. Limited time only. Don’t miss out!
     </p>
     <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
       Shop Now
     </button>
   </div>
  )
}

export default AdCard
