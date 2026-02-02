import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Profile from "../../pages/Profile";
import Allergy from "../../pages/Allergy";
import Login from "../../pages/Login";
import { Register } from "../../pages/Register";
import Contact from "../../pages/Contact";
import Menu from "../../pages/Menu";
import PageNotFound from "./PageNotFound";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/allergy" element={<Allergy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
