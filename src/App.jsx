import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './home'
import Movies from './movies'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />

      </Routes>
    </div>
  )
}

export default App
