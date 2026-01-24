import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import OrderManagement from "./pages/OrderManagement";
import UserManagement from "./pages/UserManagement";
import ProductManagement from "./pages/ProductManagement";
import ProctedRoute from "./pages/ProctedRoute";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<ProctedRoute cmp={<Product/>} />}></Route>
        {/* Dynamic Route */}

        <Route path="/productDetail/:id" element={<ProductDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* Nested Route */}
        <Route path="/admin/" element={<Admin />}>
          <Route path="productManagement" element={<ProductManagement />} />
          <Route index element={<ProductManagement />} />
          <Route path="orderManagement" element={<OrderManagement />} />
          <Route path="userManagement" element={<UserManagement />} />
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
