import { useState } from 'react'
import {BrowserRouter,  Routes, Route}  from "react-router-dom"
import Started from './component/started'
import './App.css'
import Navbar from './component/Navbar'
import News from './component/News'
import Incidents from './component/Incidents'
import Selection from './component/Selection'
import Node from './component/Node'
import LastSections from './component/Location'
import MainLocaions from './component/MainLocaions'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
       <Routes>
         <Route path='/' element={<News/>}/>
         <Route path='/incidents' element={<Incidents/>}/>
          <Route path='/started' element={<Started/>}/>
          <Route path='/select' element={<Selection/>}/>
          <Route path='/node' element={<Node/>}/>
          <Route path='/lastsection' element={<LastSections/>}/>
          <Route path='/locations' element={<MainLocaions/>}/>
       </Routes>
    
    </BrowserRouter>
  )
}

export default App
