import React from 'react';

import '../first-post-header/first-post-header.css'
import { Roboto } from 'next/font/google'


const roboto900normal = Roboto({
    weight: "900",
    style: "normal",
    subsets: ["cyrillic"],
})



const FirstPostHeader = () => {
    return (
        <div className={`headerMainBox ${roboto900normal.className}`}>
            <p className='greenHeader'>01.Фокусволи</p>
            <p>02.Куби</p>
            <p>03.Віндери</p>
            <p>04.Підтримка</p>
        </div>
    );
};

export default FirstPostHeader;