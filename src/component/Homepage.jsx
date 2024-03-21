import { Navbar } from './navbar/Navbar';
import { Header } from './Header';
import { Products } from './services/Products';
import { Product } from './Product';


export const Homepage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Products />
            <Product />
        </>
    )
}

export default Homepage;