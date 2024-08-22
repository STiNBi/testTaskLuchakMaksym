import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Roboto } from 'next/font/google'
import { Inter } from 'next/font/google'

import '../footer/footer.css'

import LogoFooter from '../../../../public/LogoFooter.svg'

const roboto600 = Roboto({
    weight: "700",
    style: "normal",
    subsets: ["cyrillic"],
})

const inter500 = Inter({
    weight: "500",
    style: "normal",
    subsets: ["cyrillic"],
})


const Footer = () => {



    return (
        <div className='footerBox'>
            <Image src={LogoFooter} alt='Logo'/>
            <div className='linkBox'>
                <Link href={'/'} className={`${roboto600.className}`}>Focuswall</Link>
                <Link href={'/'} className={`${roboto600.className}`}>Cube</Link>
                <Link href={'/'} className={`${roboto600.className}`}>Flag</Link>
            </div>
            <div className='contacts'>
                <p>order@toptrend.com.ua</p>
                <p>+ 380 (67) 314-55-15</p>
                <p>+ 380 (67) 314-55-00</p>
            </div>
        </div>
    );
};

export default Footer;