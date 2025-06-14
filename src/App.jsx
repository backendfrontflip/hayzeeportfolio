import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Project3 from './components/Project3'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project-1" element={<Project1 />} />
          <Route path="/project-2" element={<Project2 />} />
          <Route path="/project-3" element={<Project3 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
