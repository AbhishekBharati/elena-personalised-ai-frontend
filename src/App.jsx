import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import './App.css'

const App = () => {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} ></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App;