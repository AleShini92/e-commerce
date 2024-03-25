//import style scss
import './App.scss';
//
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//import components
import Main from './component/Main';
import Products from './component/services/Products';
import Product from './component/Product';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/product' element={<Product />} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;