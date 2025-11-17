import "../styles/recoverpassword.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const RecoverPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleRecover = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica real de envío del correo
    alert(`Se ha enviado un enlace de recuperación a: ${email}`);
    navigate("/login");
  };

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
        </div>
      </header>

      <main>
        <div className="container-recover">
          <form className="recover-card" onSubmit={handleRecover}>
            <div className="logo-style"></div>
            <h2>Recuperar Contraseña</h2>
            <p>Ingresa tu correo electrónico para recibir un enlace de recuperación</p>

            <div className="recover-form">
              <div>
                <input
                  type="email"
                  placeholder="Ingresa tu Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn submit-btn">
              Enviar Enlace
            </button>

            <div className="back-to-login">
              <span>¿Ya recuerdas tu contraseña? </span>
              <Link to="/login" className="back-link">
                Inicia sesión aquí
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

export default RecoverPassword;