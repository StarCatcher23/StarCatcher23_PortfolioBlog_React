import { Routes, Route } from "react-router-dom";
import NavBar from "../Navigation/NavBar";

import Menu from "../../components/../pages/Menu/menu";
import Login from "../LoginModal/LoginModal";
import Register from "../RegisterModal/RegisterModal";
import Home from "../../pages/Home/Home";
import AboutMe from "../../pages/AboutMe/AboutMe";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
