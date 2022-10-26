//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [])

    const Loading = () => {
        return(
            <>
                Loading...
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="product-img">
                    <figure className="d-flex c-gap-20">
                        <img src={product.image} alt={product.title} height="400px"/>
                        <div>
                            <h4 className="txt-uppercase txt-black-60">{product.category}</h4>
                            <h5 className="txt-uppercase txt-lighter">{product.title}</h5>
                            <div className="d-flex mt-10 mb-10">
                                <p>Racting {product.rating && product.rating.rate} </p>
                                <svg className="w-2 ml-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
                                </svg>
                            </div>
                            <h6 className="mt-10 mb-10">${product.price}</h6>
                            <figcaption>{product.description}</figcaption>
                            <div className="d-flex mt-20">
                                <span className="button btn btn-black mr-10" onClick={() => addProduct(product)}>Add to card</span>
                                <NavLink to="/cart" className="button btn btn-black bg-black text-white">
                                    Go to cart
                                </NavLink>
                            </div>
                        </div>
                    </figure>
                </div>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>
                    Product
                </title>
            </Helmet>
            <div className="card w-70 m-auto mt-100 outline-30 p-2 b-radius-2">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </>
    );
}

export default Product;