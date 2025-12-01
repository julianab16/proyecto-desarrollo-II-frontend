import "../styles/login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginRequest } from "../api/auth.api";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  //const { login } = useAuth(); // <-- IMPORTANTE
  const { setIsAuthenticated, setUser } = useAuth();
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_forgotOpen, setForgotOpen] = useState(false);
  const [_forgotMessage, setForgotMessage] = useState(null);
  const [_forgotEmail, setForgotEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await loginRequest({ username, password });

      
      //  Guardar tokens
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      //  Guardar usuario en contexto
      setIsAuthenticated(true);
      setUser(res.data.user);
      //login(res.data.user);  //  actualiza Header

      //  Navegación después del login
      navigate("/homeuser");

    } catch (err) {
  console.error("ERROR LOGIN:", err);
  setErrorMessage(err.response?.data?.detail || err.message || "Error al iniciar sesión.");
}

  };

  return (
    <>

      <main>
        <div className="container-login">
          <form className="login-card" onSubmit={handleSubmit}>
            <div className="logo-style"></div>
            <h2>Inicia Sesión</h2>
            <p>Inicia sesión en tu cuenta para continuar comprando </p>

            {/* Error */}
           {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}

            <div className="login-form">
              <div>
                <input
                  type="text"
                  placeholder="Ingresa tu nombre de usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button className="btn submit-btn" type="submit">
              Iniciar Sesión
            </button>

            <div className="forgot-password-container">
              <button
                type="button"
                className="forgot-password-link"
                onClick={() => {
                  setForgotOpen(true);
                  setForgotMessage(null);
                  setForgotEmail("");
                }}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <div className="signup-prompt">
              <span>¿No tienes una cuenta? </span>
              <Link to="/register" className="signup-link">
                Regístrate aquí
              </Link>
            </div>
          </form>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="logo-small"></div>
          <div className="copyright">
            © 2025 L'ATELIER. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Login;
