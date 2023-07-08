import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Cart } from '../components/Cart/Cart.component';
import { Category } from '../pages/Category/Category.page';
import { Footer } from '../components/Footer/Footer.component';
import { Home } from '../pages/Home/Home.page';
import { NavBar } from '../components/NavBar/NavBar.component';
import { ProductDetail } from '../pages/ProductDetail/ProductDetail.page';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} exact path='*' />
        <Route element={<Home />} exact path='/' />
        <Route element={<Category />} path='/category/:category' />
        <Route element={<ProductDetail />} path='/product/:slug' />
        <Route element={<Cart />} path='/cart' />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
