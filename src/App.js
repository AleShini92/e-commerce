//import style scss
import './App.scss';
//import components
import Header from './component/Header';
import Main from './component/Main';
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
    </>
  );
}

export default App;
