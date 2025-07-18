import { useState } from 'react'
import {BrowserRouter,  Routes, Route}  from "react-router-dom"
import './App.css'
import Navbar from './component/Navbar'
import News from './component/News'
import Incidents from './component/Incidents'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
       <Routes>
         <Route path='/' element={<News/>}/>
         <Route path='/incidents' element={<Incidents/>}/>
       </Routes>
    
    </BrowserRouter>
  )
}

export default App
