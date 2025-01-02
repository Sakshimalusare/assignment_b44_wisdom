import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Portfolio from './Components/Portfolio'
import Testiminols from './Components/Testiminols'
import Contact from './Components/Contact'
import Footer from './Components/Footer'




function App  ()  {
  return (
    <div className='App'>
      <Header/>
      <main>
        <Home/>
      <About/>
      <Service/>
      <Portfolio/>
      <Testiminols/>
      <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
