import React from 'react'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <div id="navbar">
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/red" element={<Red />} /> {/* Use Red component */}
          <Route path="/blue" element={<Blue />} /> {/* Use Blue component */}
          <Route path="/" element={<Home />} /> {}
        </Routes>
      </div>
    </div>
  )
}

export default App