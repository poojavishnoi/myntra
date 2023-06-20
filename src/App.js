import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Product from './pages/Product';
function App() {
  return (
    <div className=" w-[100%]">
    <Header/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/all" element={<ProductListing/>}/>
      <Route path="/product/:id" element={<Product/>}/>
    </Routes>
    <Footer/>
        </div>
  );
}

export default App;
