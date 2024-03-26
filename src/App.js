import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/**
 * Import react-router-dom for implement the navigation of the pages:
 * npm i react-router-dom
 * 
 * Install the last version of React:
 * npm install react@18 react-dom@18
**/




// Import website folder and blog
import Main from './component/Main';
import Home from './component/Home';import Navbar from './component/navbar/Navbar';
import Products from './component/services/Products';



function App() {
    return (
      <>
        <main>
          <Navbar />
            <Routes>
              <Route exact path='/e-commerce' element={<Main />} />
              <Route exact path='/' element={<Main />} />
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/product' element={<Products />} />
            </Routes>
        </main>
      </>
    )
}
export default App