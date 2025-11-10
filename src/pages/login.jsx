import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">L'ATELIER</div>
          <nav className="main-nav">
            <Link to="/">Inicio</Link>
            <Link to="#">Sobre Nosotros</Link>
            <Link to="#">Pinturas</Link>
          </nav>
          <div className="auth">
            <button
              className="btn btn-outline"
              onClick={() => navigate("/login")}
            >
              Inicia Sesión
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/register")}
            >
              Registrate
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="container-login">
          <form className="login-card">
            <div className="logo-style"></div>
            <h2>Inicia Sesión</h2>
            <p>Inicia sesión en tu cuenta para continuar comprando </p>

            <div className="login-form">
                <div>
                    <input type="email" placeholder="Ingresa tu Correo Electrónico" />
                </div>

                <div>
                    <input type="text" placeholder="Ingresa tu Contraseña" />
                </div>
            </div>

            <button className="btn submit-btn">Iniciar Sesión</button>

            <div className="forgot-password-container">
              <button
                type="button"
                className="forgot-password-link"
                onClick={() => { 
                  setForgotOpen(true); 
                  setForgotMessage(null);
                  setForgotEmail('');
                }}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <div className="signup-prompt">
            <span>¿No tines una cuenta? </span>
            <Link to="/register" className="signup-link">
              Registrate aqui
            </Link>
          </div>

            </form>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="logo-small"></div>
          <div className="copyright">© 2025 L'ATELIER. Todos los derechos reservados.</div>
        </div>
      </footer>
    </>
  );
};

export default Login;
