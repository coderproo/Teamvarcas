import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';
import ForSponsors from "./components/ForSponsors";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<><Hero /><About /><Sponsor /><Contact /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forsponsors" element={<ForSponsors />} />
    
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
