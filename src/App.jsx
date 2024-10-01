// src/App.jsx
import React from 'react';
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
  return (
   <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path ="/services" element={<Services/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path ="/Contact" element={<Contact/>}/>
        <Redirect to="/" />
      </Routes>
      <Footer/>
   </Router> 
  );
};

export default App;
