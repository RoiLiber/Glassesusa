import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import { glasses } from "../../consts";
import Fire from '@material-ui/icons/Whatshot';
import Fade from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import Carousel from "../Carousel/Carousel";
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

export default function Glasses(props) {
    const { darkMode } = props;
    const [isOpen, setIsOpen] = useState(false);

    function calculateDiscount(price, finalPrice) {
        return 100 - ((finalPrice / price) * 100).toFixed(0)
    }

    function glassesItem(item, index) {
        const name = item.name;
        const imgList = [item.img_front, item.img_angle, item.img_side]
        const price = item.price;
        const finalPrice = item.final_price;
        const asDiscount = price !== finalPrice;
        const discount = calculateDiscount(price, finalPrice)
        const qty = item.qty;
        const inStock = qty !== 0;

        return <Fade bottom delay={200 * (index + 1)} key={item.id}>
            <div key={item.id} className={`item ${darkMode ? 'item_darkMode' : ''}`}>
                <div className={'item_top'}>
                    {asDiscount ? <span className={'discount'}>{discount}% OFF</span> : null}
                    <span className={'qty'}>
                    {!inStock ? '0 items ' : `Under ${qty + 1} `}
                        left
                    <Fire className={'fire_icon'}/>
                </span>
                </div>
                <div className={'glasses_photo'}>
                    <Carousel imgList={imgList} key={uuidv4} darkMode={darkMode}/>
                </div>
                <span className={'name'}>{name}</span>
                <p className={'price_and_shipping'}>
                    {asDiscount && <span className={'price'}>
                    ${price}
                        <span className={'line'}/>
                </span>}
                    <span className={'final_price'}>${finalPrice}</span>
                    + Free Shipping
                </p>
                <a href={item.link}>
                    <Button
                        className={`item_btn ${!inStock ? 'disabled' : ''}`}
                        disabled={!inStock}
                        variant="text"
                    >
                        {inStock ? 'shop now' : 'sold out'}
                    </Button>
                </a>
            </div>
        </Fade>
    }

    return (
        <div className={'glasses_wrapper'}>
            <div className={`head_line_wrapper ${darkMode ? 'head_line_wrapper_dark' : ''}`}>
                <span className={'head_line'}>Our Top Daily Favorites</span>
            </div>
            {
                !isOpen
                    ? <Pulse count={3} delay={1200}>
                        <Button
                            variant="text"
                            className={`btn ${darkMode ? 'darkMode_btn' : ''}`}
                            onClick={() => setIsOpen(true)}
                        >
                            show me
                        </Button>
                    </Pulse>
                : <div className={`glasses_list ${darkMode ? 'darkMode_list' : ''}`}>
                    {glasses.map((item, index) => {
                        return glassesItem(item, index)
                    })}
                </div>
            }
        </div>
    );
}
