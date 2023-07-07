import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Category } from '../pages/Category/Category.page';
import { Home } from '../pages/Home/Home.page';
import { NavBar } from '../components/NavBar/NavBar.component';
import { ProductDetail } from '../pages/ProductDetail/ProductDetail.page';
import { Footer } from '../components/Footer/Footer.component';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} exact path='*' />
        <Route element={<Home />} exact path='/' />
        <Route element={<Category />} path='/category/:category' />
        <Route element={<ProductDetail />} path='/product/:slug' />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
