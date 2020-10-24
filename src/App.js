import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Logo from './assets/logo.png';
import LogoDark from './assets/logo_dark.png';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Jump from 'react-reveal/HeadShake';
import Glasses from './components/Glasses/Glasses';
import './App.scss';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const logo = darkMode ? LogoDark : Logo;

  return (
      <Router>
          <div className={`App ${darkMode ? 'app_darkMode' : ''}`}>
              {darkMode
                  ? <EmojiObjectsIcon
                      className={`dark_icon`}
                      onClick={() => setDarkMode(!darkMode)}
                  />
                  : <WbIncandescentIcon
                      className={`light_icon`}
                      onClick={() => setDarkMode(!darkMode)}
                  />}
              <header className={`header ${darkMode ? 'header_darkMode' : ''}`}>
                  <Jump delay={500}>
                      <a href={'https://www.glassesusa.com/'}>
                          <img src={logo} alt={'logo'}/>
                      </a>
                  </Jump>
                  <Jump delay={1200}>
                      <span>Our Top Daily Favorites</span>
                  </Jump>
              </header>
              <Glasses darkMode={darkMode}/>
          </div>
      </Router>
  );
}