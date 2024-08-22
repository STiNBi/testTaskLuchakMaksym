import React, { ReactNode } from 'react';
import Image from 'next/image';

import "../first-post-info-component/first-post-info-component.css"
import { Roboto } from 'next/font/google'

const roboto500 = Roboto({
    weight: "500",
    style: "normal",
    subsets: ["cyrillic"],
})

const roboto900normal = Roboto({
    weight: "900",
    style: "normal",
    subsets: ["cyrillic"],
})

const roboto900italic = Roboto({
    weight: "900",
    style: "italic",
    subsets: ["cyrillic"],
})

interface InfoComponent {
    children: ReactNode,
    bigText: string,
    text: string,
    image: any
}

const InfoComponent = ({ children, bigText, text, image }: InfoComponent) => {
    return (
        <div className='mainInfoComponentBox'>

            {children}

            <div className='contentBox'>
                <div className='buttonAndTextBox'>
                    <p className={`text ${roboto500.className}`}>
                        <span className={`bigText ${roboto900italic.className}`}>{bigText} </span>
                        {text}
                    </p>

                    <button className={`buttonOrder ${roboto900normal.className}`}>Замовити</button>
                </div>

                <Image src={image} alt='Logo' />
            </div>

        </div>
    );
};

export default InfoComponent;