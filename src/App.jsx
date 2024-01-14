import React from 'react'
import "./App.css"
import Navbar from './components/navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
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
      <Footer/>
    </div>
  )
}

export default App
