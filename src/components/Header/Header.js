import React from 'react';
import Logo from '../../assets/logo.png';
import LogoDark from '../../assets/logo_dark.png';
import Fade from 'react-reveal';
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import './style.scss';

export default function Header(props) {
    const { toggleDarkMode, darkMode } = props;
    const logo = darkMode ? LogoDark : Logo;

    return (
        <header className={`header ${darkMode ? 'header_darkMode' : ''}`}>
            <Fade delay={500}>
                <a href={'https://www.glassesusa.com/'}>
                    <img src={logo} alt={'logo'}/>
                </a>
            </Fade>
            <span className={`lamp_wire ${darkMode ? 'lamp_wire_darkMode' : ''}`}/>
            {darkMode
                ? <EmojiObjectsIcon
                    className={`lamp_icon dark_icon`}
                    onClick={() => toggleDarkMode()}
                />
                : <WbIncandescentIcon
                    className={`lamp_icon light_icon`}
                    onClick={() => toggleDarkMode()}
                />}
        </header>
    );
}
