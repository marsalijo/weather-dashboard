import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WeatherComponent from './components/WeatherComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/weather" element={<WeatherComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
