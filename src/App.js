//import style scss
import './App.scss';
//
import { Routes, Route } from 'react-router-dom';
//import components
import Header from './component/Header';
import Main from './component/Main';
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/header" element={<Header />} />
        <Route exact path="/Products" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;