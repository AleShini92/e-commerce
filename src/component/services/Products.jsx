import React, { useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
                <Skeleton height={350} />
                <Skeleton height={350} />
                <Skeleton height={350} />
                <Skeleton height={350} />
            </>
        );
    };

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <button className='button btn btn-black' onClick={() => setFilter(data)}>All</button>
                    <button className='button btn btn-black' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='button btn btn-black' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='button btn btn-black' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className='button btn btn-black' onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                <div className="wrapper-card d-flex p-2">
                    {filter.map((product) => {
                        return(
                            <>
                                <div className="card outline-20 b-radius-2 p-1 w-2 txt-center">
                                    <figure key={product.id}>
                                        <img src={product.image} alt={product.title.substring(0, 12)} />
                                        <figcaption>
                                            <h5>{product.title}</h5>
                                            <p>${product.price}</p>
                                            <NavLink className='button btn btn-black' to={`/products/${product.id}`}>Buy now</NavLink>
                                        </figcaption>
                                    </figure>
                                </div>
                            </>
                        );
                    })}
                </div>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>
                    Products
                </title>
            </Helmet>
            <article className="wrapper-products">
                <h2 className='title'>Latest products</h2>
                {loading ? <Loading /> : <ShowProducts />}
            </article>
        </>
    );
}

export default Products;