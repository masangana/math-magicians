import './App.css';
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator.js';
import Nav from './components/Nav';
import Home from './components/Home';
import Quote from './components/Quote';
import Footer from './Footer';


function App() {
  return (
      <Router>
        
          <Nav />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/quote" element={<Quote/>} />
              <Route path="/calculator" element={<Calculator/>} />
          </Routes>
          <Footer />
      </Router>
      
    
  );
}

export default App;
