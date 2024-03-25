import React from "react";


//import website

import { Navbar } from "./navbar/Navbar";
import { Header } from "./Header";
import { Products } from "./services/Products";
import { Product } from "./Product";


export const Main = () => {
    return (
        <>
            <main>
                <Navbar />
                <Header />
                <Products />
                <Product />
            </main>
        </>
    );
}

export default Main;