import React from 'react'
import "./App.css"
import Navbar from './components/navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Products/>
      <Blog/>
      <Newsletter/>
    </div>
  )
}

export default App
