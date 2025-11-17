import React from 'react';
import '../styles/home.css';
import { Link, useNavigate} from 'react-router-dom';

const Home = () => {
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
            <button className="btn btn-outline" onClick={() => navigate('/login')}>Inicia Sesión</button>
            <button className="btn btn-primary" onClick={() => navigate('/register')}>Registrate</button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO - sin container en la sección */}
        <section className="hero">
          <div className="hero-inner">
            <h1>Bienvenido a L' ATELIER</h1>
            <p className="lead">Descubre pinturas de alta calidad al mejor precio para aquellos amantes del arte</p>
            <a className="btn btn-ghost" href="#">Crear Cuenta</a>
          </div>
        </section>

        {/* WHY - sin container en la sección */}
        <section className="why">
          <div className="container">
            <h2 className="section-title">¿Porque elegirnos?</h2>
            <p className="section-sub">
              Nos comprometemos a brindarle a nuestros usuarios pinturas de alta calidad y a los mejores precios
            </p>

            <div className="features">
              <div className="feature">
                <div className="circle">🎨</div>
                <h3>Alta Calidad</h3>
                <p>Pinturas seleccionadas cuidadosamente para todos los gustos</p>
              </div>
              <div className="feature">
                <div className="circle">🛍️</div>
                <h3>Compras Fáciles</h3>
                <p>Proceso de pago simple y seguro para una experiencia fluida</p>
              </div>
              <div className="feature">
                <div className="circle">🤝</div>
                <h3>Buen Soporte</h3>
                <p>Nuestro equipo preparado para ayudarte a encontrar lo que necesitas</p>
              </div>
            </div>

            <div className="cta">
              <h3>¿Listo para explorar?</h3>
              <p>Únete a miles de usuarios que confían en L'ATELIER para comprar sus pinturas favoritas</p>
              <a className="btn btn-primary large" href="#">Empieza Ahora</a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER - se mantiene igual */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="logo-small"></div>
          <div className="copyright">© 2025 L'ATELIER. Todos los derechos reservados.</div>
        </div>
      </footer>
    </>
  );
}

export default Home;