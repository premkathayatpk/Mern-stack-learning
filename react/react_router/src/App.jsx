import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
