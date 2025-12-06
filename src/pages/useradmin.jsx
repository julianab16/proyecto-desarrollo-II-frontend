import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/header.css";
import "../styles/useradmin.css";

const initialUsers = [
  { id: 1, name: "Ana Pérez", email: "ana@example.com", role: "user" },
  { id: 2, name: "Carlos Gómez", email: "carlos@example.com", role: "moderator" },
  { id: 3, name: "María López", email: "maria@example.com", role: "admin" },
];

const roles = ["user", "moderator", "admin"];

export default function UserAdmin() {
  const [users, setUsers] = useState(initialUsers);
  const [changed, setChanged] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleRoleChange = (id, newRole) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, role: newRole } : u)));
    setChanged(true);
  };

  const handleSaveAll = () => {
    console.log("Usuarios a guardar:", users);
    setChanged(false);
    alert("Cambios guardados (simulado).");
  };

  const handleReset = () => {
    setUsers(initialUsers);
    setChanged(false);
  };

  return (
    <>
      {/* Header en página — mismas clases que Header.jsx para heredar estilos */}
      <header className="site-header">
        <div className="header-inner">
          <Link to="/">
            <img src="/logo-l'atelier.png" alt="L'Atelier Logo" className="img-logo" />
          </Link>

          <nav className="main-nav">
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/">Pinturas</Link>
          </nav>

          <div className="header-auth">
            {!user ? (
              <>
                <Link className="btn btn-outline" to="/admin-dashboard">Gestion de Pinturas</Link>
                <button className="btn btn-outline" aria-label="user">
              <span className="user-icon">👤</span>
              
            </button>
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
                <Link className="btn btn-outline" to="/admin-dashboard">Gestion de Pinturas</Link>
                
              </>
            ) : (
              <button className="btn btn-outline" onClick={logout}>Cerrar sesión</button>
            )}
          </div>
        </div>
      </header>

      {/* Contenido de administración de usuarios */}
      <div className="useradmin-page container">
        <header className="useradmin-header">
          <h1>Gestión de Usuarios</h1>
          <div className="useradmin-actions">
            
            <button className="btn btn-primary" onClick={handleSaveAll} disabled={!changed}>
              Guardar cambios
            </button>
          </div>
        </header>

        <section className="users-table-wrap">
          <table className="users-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td className="user-name">{u.name}</td>
                  <td className="user-email">{u.email}</td>
                  <td className="user-role">
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                      aria-label={`Rol de ${u.name}`}
                    >
                      {roles.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="user-actions">
                    <button
                      className="btn btn-outline"
                      onClick={() => {
                        const orig = initialUsers.find((x) => x.id === u.id);
                        if (orig) handleRoleChange(u.id, orig.role);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}