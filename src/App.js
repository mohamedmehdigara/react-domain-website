import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import NotFound from './components/NotFound';
import Header from './components/Header';

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
    <Router>
       
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="notfound" element={<NotFound/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
