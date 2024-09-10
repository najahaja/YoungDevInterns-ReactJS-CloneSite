import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Internship from './Components/Internship';
import "./App.css";
function App() {
  return (<>
    <Router>
      <div>
        <Navbar />
        <div className="mt-16"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/internship" element={<Internship />} />
          </Routes>
        </div>
      </div>
    </Router></>
  );
}

export default App;
