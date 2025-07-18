import { useState } from 'react'
import {BrowserRouter,  Routes, Route}  from "react-router-dom"
import './App.css'
import Navbar from './component/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
       <Routes>
         <Route/>
       </Routes>
    
    </BrowserRouter>
  )
}

export default App
