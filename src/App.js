//import style scss
import './App.scss';
//
import { Routes, Route } from 'react-router-dom';
//import components
import Cart from './component/Cart';
import Header from './component/Header';
import Main from './component/Main';
import Navbar from './component/navbar/Navbar';
import Product from './component/Product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/Header" element={<Header />} />
        <Route exact path="/Products" element={<Main />} />
        <Route exact path="/Products/:id" element={<Product />} />
        <Route exact path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;