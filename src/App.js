/* eslint-disable no-unused-vars */
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Calculator from './components/Calculator.js';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Quote from './components/Quote.js';
import Footer from './Footer.js';

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
