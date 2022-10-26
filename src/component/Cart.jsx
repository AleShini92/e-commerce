import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../redux/action";


const Cart = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()

    const cartItems = (product) => {
        return (
            <div key={product.id}>
                <img src={product.image} />
                <p>{product.price}</p>
            </div>
        )
    }

    return (
        <>
            {state.length !== 0 && state.map(cartItems)}
        </>
    )
}

export default Cart;