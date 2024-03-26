import React from "react";
import { Helmet } from "react-helmet";

import headerBg from '../assets/headerBg.png';

export const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Home | e-commerce
                </title>
            </Helmet>
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

export default Home;