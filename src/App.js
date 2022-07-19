//import style scss
import './App.scss';
//
import { Routes, Route } from 'react-router-dom';
//import components
import Header from './component/Header';
import Main from './component/Main';
import Navbar from './component/navbar/Navbar';
import Products from './component/services/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/header" element={<Header />} />
        <Route exact path="/Main" element={<Main />} />
        <Route exact path="/Products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;