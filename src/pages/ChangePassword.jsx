import "../styles/changepassword.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const ChangePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Las contraseñas no coinciden");
      return;
    }
    // Aquí va la lógica real de cambio de contraseña
    alert("Tu contraseña ha sido cambiada exitosamente");
    navigate("/login");
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">L'ATELIER</div>
        </div>
      </header>

      <main>
        <div className="container-change">
          <form className="change-card" onSubmit={handleChangePassword}>
            <div className="logo-style"></div>
            <h2>Restablecer Contraseña</h2>
            <p>Introduce tu nueva contraseña para continuar</p>

            <div className="change-form">
              <input
                type="password"
                placeholder="Nueva contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn submit-btn">
              Cambiar Contraseña
            </button>

            <div className="back-to-login">
              <Link to="/login" className="back-link">
                Volver al inicio de sesión
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

export default ChangePassword;