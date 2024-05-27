import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteNavbar from './components/SiteNavbar';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <SiteNavbar /> {/* Place SiteNavbar outside of Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
