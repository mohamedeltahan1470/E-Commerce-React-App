import './App.css';
import Nabebar from './Nabebar/Nabebar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Footer from './Footer/Footer';
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kid_banner from "./Assets/banner_kids.png";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nabebar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCategory bannre={men_banner}  category="men" />}/>
        <Route path='/Womens' element={<ShopCategory  bannre={women_banner}  category="women"/>}/>
        <Route path='/Kids' element={<ShopCategory  bannre={kid_banner}  category="kid"/>}/>
        {/* <Route path='/product' element={<Product/>} /> */}
        <Route path=':productId' element={<Product/>} />
        {/* <Route path='/productId' element={<Product/>} /> */}
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
