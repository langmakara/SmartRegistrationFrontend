
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import ExamResul from "./page/ExamResul.jsx"
import Home from "./page/Home.jsx"

function App() {
  return (
    <div className="app-container fullscreen px-5">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examresul" element={<ExamResul />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
