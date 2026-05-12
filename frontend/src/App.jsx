import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Drives from './pages/Drives'
import About from './pages/About'
import WhatsAppButton from './components/WhatsAppButton'
import Results from './pages/Reults'

export default function App() {
  return (
    <>
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drives" element={<Drives />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Results/>}/>
      </Routes>
    </>
  )
}