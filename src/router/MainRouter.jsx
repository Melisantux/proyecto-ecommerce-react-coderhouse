import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "../pages/Category/Category.page";
import { Home } from "../pages/Home/Home.page";
import { NavBar } from "../components/NavBar/NavBar.component";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail.page";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
      <footer>Footer</footer>
    </BrowserRouter>
  );
};