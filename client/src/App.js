import './App.css';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import ProductDetali from './components/ProductDetali';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
    <Header/>
     <Routes>
       <Route exact path='/' element={ <Home />}/>
       <Route exact path='/products' element={ <Product />}/>
       <Route exact path='/products/:id' element={ <ProductDetali />}/>
       <Route exact path='/cart' element={ <Cart />}/>
       <Route exact path='/checkout' element={ <Checkout />}/>
       <Route exact path='/about' element={ <About />}/>
       <Route exact path='/contact' element={ <Contact/>}/>
     </Routes>
    </>
   
  );
}

export default App;
