import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/**
 * Import react-router-dom for implement the navigation of the pages:
 * npm i react-router-dom
 * 
 * Install the last version of React:
 * npm install react@18 react-dom@18
**/




// Import website folder and blog
import { Homepage } from './Homepage';
import { Products } from './services/Products';


export const Web = () => {
    return (
        <>
            <main>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Homepage />} />
                        <Route exact path='/Products' element={<Products />} />
                    </Routes>
                </Router> 
            </main>
        </>
    )
}
export default Web