import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



function App() {
  const [currentRoute, setCurrentRoute] = useState();
  return (
    <BrowserRouter>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link onClick= {()=> setCurrentRoute("Home")} 
                  className= {currentRoute == 'Home' ? 'nav-item nav-link active' : 'nav-item nav-link'} 
                  to={"/"}>
            Home</Link>

            <Link onClick= {()=> setCurrentRoute("Products")} 
                  className={currentRoute == 'Products' ? 'nav-item nav-link active' : 'nav-item nav-link'} 
                  to={"/Products"}>
            Products</Link>
          </div> 
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/new" element={<NewProduct />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
