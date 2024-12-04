// src/App.jsx
import React from 'react';
import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Pages
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Services from './Pages/services.jsx';

//components
import Navbar from './Components/navbar';
import Footer from './Components/Footer.jsx';
const App = () => {

  const [loading, setLoading] = useState(true); // Global loading state

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timeout); 
  }, []);

  return (

    <div>
      {loading && (
        <div id="loader">
          <div className="spinner"></div>
        </div>
      )}


   <Router>
   {!loading && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path ="/services" element={<Services/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path ="/Contact" element={<Contact/>}/>

      </Routes>
      {!loading && <Footer />}
   </Router> 

   </div>
  );
};

export default App;
