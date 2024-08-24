import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import MarqueeText from "./components/MainPageComps/MarqueeText";

import Shop from "./pages/Shop";
import "./App.css";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
import OrderTracking from "./pages/OrderTracking";
import FilteredProductsPage from "./pages/FilteredProductsPage";
import ErrorPage from "./pages/ErrorPage";
import Favorites from "./pages/Favorites";
import Products from "./pages/Products";
import ProductSelection from "./pages/ProductSelection";
import ProductImages from "./pages/ProductImages";

function App() {
  return (
    <Router>
      <MarqueeText />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/orderTracking" element={<OrderTracking />} />

        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/shop/:categoryName" element={<FilteredProductsPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productSelection" element={<ProductSelection />} />
        <Route path="/updateProductImages" element={<ProductImages />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
