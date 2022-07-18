import React, { useState, useEffect} from 'react';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        );
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <button className='button btn btn-black'>All</button>
                    <button className='button btn btn-black'>Men's Clothing</button>
                    <button className='button btn btn-black'>Women's Clothing</button>
                    <button className='button btn btn-black'>Jewelery</button>
                    <button className='button btn btn-black'>Electronic</button>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="wrapper-products">
                <h2>Latest products</h2>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </>
    );
}

export default Products;