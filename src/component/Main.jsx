import React from "react";
import Products from "../component/services/Products";
import Navbar from "../component/navbar/Navbar";


const Main = () => {
    return (
        <>
            <main>
                <Navbar />
                <Products />
            </main>
        </>
    );
}

export default Main;