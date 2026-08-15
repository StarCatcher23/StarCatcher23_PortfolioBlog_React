import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "../Navigation/NavBar";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import Menu from "../../pages/Menu/menu";
import Home from "../../pages/Home/Home";
import AboutMe from "../../pages/AboutMe/AboutMe";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <NavBar
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={(data) => {
          console.log("Login data:", data);
          setIsLoginOpen(false);
        }}
        onOpenRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegister={(data) => {
          console.log("Register data:", data);
          setIsRegisterOpen(false);
        }}
        onOpenLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
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
