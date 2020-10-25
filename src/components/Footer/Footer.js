import React from 'react';
import { netIconList } from "../../consts";
import './style.scss';

export default function Footer() {
    return (
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
    );
}
