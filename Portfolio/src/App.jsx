import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Experience from './components/expirience/Experience'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'
import Footer from './components/footer/Footer'


function App() {
  

  return (
    <>
      <div className="bg-[#0a192f] text-white min-h-screen relative">
        <div  className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div>
          <Navbar />
          <Experience />
          <Skills />
          <Work /> 
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
