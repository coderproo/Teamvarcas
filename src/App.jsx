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
            {/* Homepage: only Hero + About */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                </>
              }
            />

            {/* Other sections as individual pages */}
            <Route path="/about" element={<About />} />
            <Route path="/sponsor" element={<Sponsor />} />
            {/* If you don’t want gallery at all, remove this route */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
