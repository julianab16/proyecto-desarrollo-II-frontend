import { useState } from "react";
import "../styles/header.css";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="site-header">
      <div className="header-inner">

        <Link to="/" className="header-logo">MiApp</Link>

        <nav className="main-nav">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
        </nav>

        <div className="header-auth">
          {!user ? (
            <>
              <Link className="btn btn-outline" to="/login">Iniciar sesión</Link>
              <Link className="btn btn-primary" to="/register">Registrarse</Link>
            </>
          ) : (
            <button className="btn btn-outline" onClick={logout}>Cerrar sesión</button>
          )}
        </div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
        <Link to="/servicios" onClick={() => setOpen(false)}>Servicios</Link>

        <div className="mobile-auth">
          {!user ? (
            <>
              <Link className="btn btn-outline" to="/login">Iniciar sesión</Link>
              <Link className="btn btn-primary" to="/register">Registrarse</Link>
            </>
          ) : (
            <button className="btn btn-outline" onClick={logout}>Cerrar sesión</button>
          )}
        </div>
      </div>
    </header>
  );
}
