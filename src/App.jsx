import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './home'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>
    </div>
  )
}

export default App
