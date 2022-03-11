import './App.css';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
     <Routes>
       <Route exact path='/' element={ <Home />}/>
       <Route exact path='/products' element={ <Product />}/>
       <Route exact path='/about' element={ <About />}/>
       <Route exact path='/contact' element={ <Contact/>}/>
     </Routes>
    </>
   
  );
}

export default App;
