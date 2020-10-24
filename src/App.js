import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Logo from './assets/logo.png';
import Jump from 'react-reveal/HeadShake';
import Glasses from './components/Glasses/Glasses';
import './App.scss';

export default function App() {
  return (
      <Router>
          <div className="App">
              <header className={'header'}>
                  <Jump delay={500}>
                      <a href={'https://www.glassesusa.com/'}>
                          <img src={Logo} alt={'logo'}/>
                      </a>
                  </Jump>
                  <Jump delay={1200}>
                      <span>Our Top Daily Favorites</span>
                  </Jump>
              </header>
              <Glasses/>
          </div>
      </Router>
  );
}