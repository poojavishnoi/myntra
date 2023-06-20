import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/all" element={<ProductListing/>}/>
    </Routes>
    <Footer/>
        </div>
  );
}

export default App;
