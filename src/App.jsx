import React from 'react'
import "./App.css"
import Navbar from './components/navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Products/>
    </div>
  )
}

export default App
