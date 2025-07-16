import './App.css'
import React from 'react'
import Header from './componets/Header.jsx'

import Card from './componets/Card.jsx'
import AdCard from './componets/AdCard.jsx'
import Footer from './componets/Footer.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Card />
        <AdCard />
      </main>
      <Footer />
    </div>
  )
}

export default App
