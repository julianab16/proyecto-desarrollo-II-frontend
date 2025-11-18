import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <h1>Bienvenido a L' ATELIER</h1>
            <p className="lead">
              Descubre pinturas de alta calidad al mejor precio para aquellos amantes del arte
            </p>

            {/* Usa Link en vez de <a href="#"> */}
            <Link className="btn btn-ghost" to="/register">
              Crear Cuenta
            </Link>
          </div>
        </section>

        {/* WHY */}
        <section className="why">
          <div className="container">
            <h2 className="section-title">¿Por qué elegirnos?</h2>
            <p className="section-sub">
              Nos comprometemos a brindarte pinturas de alta calidad y a los mejores precios
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
                <p>Nuestro equipo está preparado para ayudarte a encontrar lo que necesitas</p>
              </div>
            </div>

            <div className="cta">
              <h3>¿Listo para explorar?</h3>
              <p>
                Únete a miles de usuarios que confían en L'ATELIER para comprar sus pinturas favoritas
              </p>

              <Link className="btn btn-primary large" to="/shop">
                Empieza Ahora
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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

export default Home;
