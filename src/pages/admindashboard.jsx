import React from "react";
import { Link } from "react-router-dom";
import "../styles/admindashboard.css";

const stats = [
  { title: "Total Productos", value: 10 },
  { title: "En Stock", value: 6 },
  { title: "Sin Stock", value: 4 },
];

const products = [
  {
    id: 1,
    name: "Nombre de Pintura 1",
    desc: "Descripción a detalle de las características de la pintura 1",
    price: "COL 100000",
    status: "En Stock",
    img: "/placeholder-64.png",
  },
  {
    id: 2,
    name: "Nombre de Pintura 2",
    desc: "Descripción a detalle de las características de la pintura 2",
    price: "COL 120000",
    status: "Sin Stock",
    img: "/placeholder-64.png",
  },
];

export const AdminDashboard = () => {
  return (
    <>
      {/* Header del admin — usa las mismas clases que el Header global */}
      <header className="site-header dashboard-header">
        <div className="header-inner container">
          <Link to="/">
            <img
              src="/logo-l'atelier.png"
              alt="L'Atelier Logo"
              className="img-logo"
            />
          </Link>

          <nav className="main-nav">
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/">Pinturas</Link>
          </nav>

          <div className="header-auth">
            <button className="btn btn-primary" ><Link to="/user-admin">Gestionar Usuarios</Link></button>
            <button className="btn btn-outline" aria-label="user">
              <span className="user-icon">👤</span>
              
            </button>
          </div>

          <div className="hamburger" /* opcional: para móvil */>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <main className="dashboard-main container">
        <h1 className="dashboard-title">Panel de Administrador</h1>

        <section className="stats-row">
          {stats.map((s) => (
            <div key={s.title} className="stat-card">
              <div className="stat-title">{s.title}</div>
              <div className="stat-value">{s.value}</div>
            </div>
          ))}
        </section>

        <section className="products-panel">
          <div className="panel-header">
            <h2>Productos</h2>
            <button className="btn btn-primary add-btn">Añadir Producto</button>
          </div>

          <table className="products-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre/Descripción</th>
                <th>Precio</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td className="prod-img-cell">
                    <img src={p.img} alt={p.name} className="prod-img" />
                  </td>
                  <td className="prod-desc">
                    <div className="prod-name">{p.name}</div>
                    <div className="prod-text">{p.desc}</div>
                  </td>
                  <td className="prod-price">{p.price}</td>
                  <td className="prod-status">
                    <span
                      className={
                        "status-pill " + (p.status === "En Stock" ? "in" : "out")
                      }
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="prod-actions">
                    <button className="icon-btn" title="editar">✎</button>
                    <button className="icon-btn danger" title="eliminar">🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
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

export default AdminDashboard;