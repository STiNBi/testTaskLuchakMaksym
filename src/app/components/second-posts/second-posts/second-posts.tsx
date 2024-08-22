import React from 'react';
import Image from 'next/image';

import '../second-posts/second-posts.css'
import { Roboto, Inter } from 'next/font/google'




const roboto600 = Roboto({
    weight: "700",
    style: "normal",
    subsets: ["cyrillic"],
})

const roboto900 = Roboto({
    weight: "900",
    style: "normal",
    subsets: ["cyrillic"],
})

const inter700 = Inter({
    weight: "700",
    style: "normal",
    subsets: ["cyrillic"],
})

const inter400 = Inter({
    weight: "400",
    style: "normal",
    subsets: ["cyrillic"],
})

interface TextContent {
    boldText: string;
    text: string;
}

interface SecondPostsInfo {
    img: any;
    header: string;
    textContets: TextContent[];
}

const SecondPosts = ({ img, header, textContets}: SecondPostsInfo) => {
    return (
        <div className='secondPostsMainBox'>
            <Image src={img} alt='' className='imgClass' />

            <p className={`headerSecondPosts ${roboto900.className}`}>{header}</p>

            <div className='mainTextBox'>


                <div className='textConteiner leftBox'>
                    <div className='textBox'>
                        <div className={`numberPostText ${inter700.className}`}>1</div>
                        <div className={`headerPostText ${roboto600.className}`}>{textContets[0].boldText}</div>
                        <div className={`valuePostText ${inter400.className}`}>{textContets[0].text}</div>
                    </div>
                </div>

                <div className='textConteiner centerTextBox'>
                    <div className='textBox'>
                        <div className={`numberPostText ${inter700.className}`}>2</div>
                        <div className={`headerPostText ${roboto600.className}`}>{textContets[1].boldText}</div>
                        <div className={`valuePostText ${inter400.className}`}>{textContets[1].text}</div>
                    </div>
                </div>

                <div className='textConteiner rightTextBox'>
                    <div className='textBox'>
                        <div className={`numberPostText ${inter700.className}`}>3</div>
                        <div className={`headerPostText ${roboto600.className}`}>{textContets[2].boldText}</div>
                        <div className={`valuePostText ${inter400.className}`}>{textContets[2].text}</div>
                    </div>
                </div>
            </div>

            <button className='buttonMoreDeteils'>Детальніше</button>

        </div>
    );
};

export default SecondPosts