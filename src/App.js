import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Glasses from './components/Glasses/Glasses';
import Fireworks from "./components/Fireworks/Fireworks";
import './App.scss';

export default function App() {
    const [darkMode, setDarkMode] = useState(true);

    function toggleDarkMode() {
        setDarkMode(!darkMode)
    }

  return (
      <Router>
          <div className={`App ${darkMode ? 'app_darkMode' : ''}`}>
              <Header
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
                  className={`header ${darkMode ? 'header_darkMode' : ''}`}
              />
              <Glasses darkMode={darkMode}/>
              <Fireworks darkMode={darkMode}/>
              <Footer className={`footer`}/>
          </div>
      </Router>
  );
}
