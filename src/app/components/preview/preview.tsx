import React from 'react';

import { Roboto } from 'next/font/google'
import "../preview/preview.css"

import Header from '../header/header';


const robotoItalic600 = Roboto({
    weight: "700",
    style: "italic",
    subsets: ["cyrillic"],
})


const roboto600 = Roboto({
    weight: "700",
    style: "normal",
    subsets: ["cyrillic"],
})



const Preview = () => {
    return (
        <div className='background'>
            <Header />
            <div className='textAndButtonBox'>
                <p className={`${robotoItalic600.className}`}>
                    Текстильні лайтбокси <br />
                    Рекламні куби <br />
                    Віндери, прапори
                </p>
                <button className={`buttonBuyNow ${roboto600.className}`}>Замовляй прямо зараз!</button>
            </div>
        </div>
    );
};

export default Preview;