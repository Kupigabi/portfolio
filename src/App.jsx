import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Scrollup from './components/scrollup/Scrollup'
import Work from './components/work/Work'

function App() {

  return (
    <>
      <Header />

      <main className='main'>
         <Home />
         <About />
         <Skills />
         <Services />
         <Work />
         <Contact />
        
      </main>

       <Footer />
       <Scrollup />
    </>
  )
}

export default App
