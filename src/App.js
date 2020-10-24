import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Logo from './assets/logo.png';
import LogoDark from './assets/logo_dark.png';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { netIconList } from "./consts";
import Fade from 'react-reveal';
import Glasses from './components/Glasses/Glasses';
import Fireworks from "./components/Fireworks/Fireworks";
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
                  <Fade delay={500}>
                      <a href={'https://www.glassesusa.com/'}>
                          <img src={logo} alt={'logo'}/>
                      </a>
                  </Fade>
                  <Fade delay={1200}>
                      <span>Our Top Daily Favorites</span>
                  </Fade>
              </header>
              <Glasses darkMode={darkMode}/>
              <Fireworks darkMode={darkMode}/>
              <footer className={`footer`}>
                  <span>Inspire your eyes</span>
                  <div className={'networks_wrapper'}>
                      {netIconList.map((icon, index) => {
                          return <a href={icon.link}>
                              <icon.icon className={'net_icon'} key={index}/>
                          </a>
                      })}
                  </div>
              </footer>
          </div>
      </Router>
  );
}