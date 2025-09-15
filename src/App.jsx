import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import ExamResul from './page/ExamResul.jsx'
import Home from './page/Home.jsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/examresul" element={<ExamResul />} />
      </Routes>
    </Router>
  )
}

export default App
