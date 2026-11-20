import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { AuthContext } from "../../context/AuthContext.jsx";
import NavBar from "../Navigation/NavBar";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { loginUser, registerUser } from "../../api";

import Menu from "../../pages/Menu/menu";
import Home from "../../pages/Home/Home";
import AboutMe from "../../pages/AboutMe/AboutMe";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";

function getStoredAuthSession() {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  if (!token || !storedUser) {
    return { token: null, user: null };
  }

  try {
    return { token, user: JSON.parse(storedUser) };
  } catch (error) {
    console.error("Unable to read the saved user session:", error);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return { token: null, user: null };
  }
}

function App() {
  const [authSession, setAuthSession] = useState(getStoredAuthSession);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [initialEmail, setInitialEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  function openLogin(email = "", message = "") {
    setInitialEmail(email);
    setLoginError("");
    setLoginMessage(message);
    setRegisterError("");
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  }

  function openRegister(email = "") {
    setInitialEmail(email);
    setLoginError("");
    setLoginMessage("");
    setRegisterError("");
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  }

  async function handleLogin(data) {
    setIsLoginLoading(true);
    setLoginError("");
    setLoginMessage("");

    try {
      const session = await loginUser(data);
      localStorage.setItem("token", session.token);
      localStorage.setItem("user", JSON.stringify(session.user));
      setAuthSession({ token: session.token, user: session.user });
      setIsLoginOpen(false);
    } catch (error) {
      if (error.code === "ACCOUNT_NOT_FOUND") {
        openRegister(data.email);
      } else {
        setLoginError(error.message || "Unable to log in. Please try again.");
      }
    } finally {
      setIsLoginLoading(false);
    }
  }

  async function handleRegister(data) {
    setIsRegisterLoading(true);
    setRegisterError("");

    try {
      await registerUser(data);
      openLogin(data.email, "Registration successful. You can now log in.");
    } catch (error) {
      setRegisterError(
        error.message || "Unable to register. Please try again.",
      );
    } finally {
      setIsRegisterLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={authSession}>
      <NavBar
        onLoginClick={() => openLogin()}
        onRegisterClick={() => openRegister()}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
        onOpenRegister={openRegister}
        initialEmail={initialEmail}
        error={loginError}
        message={loginMessage}
        isLoading={isLoginLoading}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegister={handleRegister}
        onOpenLogin={openLogin}
        initialEmail={initialEmail}
        error={registerError}
        isLoading={isRegisterLoading}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog onLoginRequest={() => openLogin()} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
