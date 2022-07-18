import React from "react";

import headerBg from '../assets/headerBg.png';

const Header = () => {
    return (
        <>
            <header>
                <div className="wrapper-header bg-dark-blue p-1">
                    <figure>
                        <figcaption>
                            <h1>New seasons arrivals</h1>
                            <p>check out all the trands</p>
                        </figcaption>
                        <img src={headerBg} alt="woman dresses the blue dress" title="image background"/>
                    </figure>
                </div>
            </header>
        </>
    );
}

export default Header;