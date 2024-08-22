import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Roboto } from 'next/font/google'
import "../header/header.css"

import Logo from '../../../../public/Logo.svg'

const roboto600 = Roboto({
    weight: "700",
    style: "normal",
    subsets: ["cyrillic"],
})

const Header = () => {
    return (
        <div className='headerBox'>
            <Image src={Logo} alt='Logo' />
            <div className='linkBox'>
                <Link href={'/'} className={`${roboto600.className}`}>Focuswall</Link>
                <Link href={'/'} className={`${roboto600.className}`}>Cube</Link>
                <Link href={'/'} className={`${roboto600.className}`}>Flag</Link>
                <Link href={'/'} className={`${roboto600.className}`}>Contact</Link>
            </div>
        </div>
    );
};

export default Header;