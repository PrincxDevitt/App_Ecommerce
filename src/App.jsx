import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Category2 from './components/Category2'
import Service from './components/Service'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero/>
      <Category/>
      <Category2/>
      <Service/>
    </div>
  )
}

export default App
