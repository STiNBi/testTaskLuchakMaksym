import React from 'react';
import "../first-post-main-headers/first-post-main-headers.css"

import { Roboto } from 'next/font/google'




const roboto900normal = Roboto({
    weight: "900",
    style: "normal",
    subsets: ["cyrillic"],
})

interface MainHeadersPosts {
    headerText: string
}

const MainHeadersPosts = ({ headerText }: MainHeadersPosts) => {
    return (
        <div className={`mainHeadersBox ${roboto900normal.className}`}>
            {headerText}
        </div>
    );
};

export default MainHeadersPosts;