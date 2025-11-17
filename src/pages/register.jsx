import "../styles/register.css";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
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
        <div className="container-register">
          <form className="register-card">
            <div className="logo-style"></div>
            <h2>Registrate</h2>
            <p>Crea una cuenta para comenzar a comprar </p>

            <div className="register-form">
                <div>
                    <input type="text" placeholder="Nombre" />
                </div>

                <div>
                    <input type="text" placeholder="Apellido" />
                </div>

                <div>
                    <input type="number" placeholder="Edad" />
                </div>

                <div>
                    <input type="email" placeholder="Correo Electrónico" />
                </div>

                <div>
                    <input type="password" placeholder="Contraseña" />
                </div>

                <div>
                    <input type="password" placeholder="Confirma Contraseña" />
                </div>

            </div>

            <button className="btn submit-btn">Registrarse</button>


            <div className="signup-prompt">
            <span>¿Ya tines una cuenta? </span>
            <Link to="/login" className="signup-link">
              Inicia Sesión aqui
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
}

export default Register;