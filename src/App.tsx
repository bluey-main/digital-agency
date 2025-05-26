// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/common/ScrollToTop'; // Helper for scrolling on nav

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col jus min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add other routes here if needed later */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;