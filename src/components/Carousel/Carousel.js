import React, { useState } from 'react';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

export default function Carousel(props) {
    const { imgList } = props;
    const [photoIndex, setPhotoIndex] = useState(0);

    function arrowLeft(photoIndex) {
        if (photoIndex) {
            setPhotoIndex(photoIndex - 1)
        } else {
            setPhotoIndex(imgList.length - 1)
        }
    }

    function arrowRight(photoIndex) {
        if (photoIndex === imgList.length - 1) {
            setPhotoIndex(0)
        } else {
            setPhotoIndex(photoIndex + 1)
        }
    }

    return (
        <div className={'carousel_wrapper'}>
            <span className={'arrow'}>
                <ArrowBackIos onClick={() => arrowLeft(photoIndex)}/>
            </span>
            <img src={imgList[photoIndex]} alt={'glasses front'}/>
            <span className={'arrow'}>
                <ArrowForwardIos onClick={() => arrowRight(photoIndex)}/>
            </span>
            <div className={'btn_wrapper'}>
                {imgList.map((btn, index) => {
                    return <span
                        key={uuidv4 + index}
                        className={`btn ${index === photoIndex ? 'selected' : ''}`}
                        onClick={() => setPhotoIndex(index)}
                    />
                })}
            </div>
        </div>
    );
}