import React from 'react';
import '../styles/homeuser.css';
import { Link, useNavigate } from 'react-router-dom';

const HomeUser = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="logo">L’ATELIER</h1>

        <div className="search-container">
          <input type="text" placeholder="Buscar" />
        </div>

        <div className="icons">
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-user-circle"></i>
        </div>
      </header>

      {/* SLIDER */}
      <section className="slider">
        <img
          src="banner.jpg" 
          alt="banner"
          className="slider-img"
        />
      </section>

      {/* SECCIONES */}
      <section className="sections">
        <p className="title-small">Explora por secciones:</p>

        <div className="sections-buttons">
          <button onClick={() => navigate('/oleo')}>
            Pintura al óleo
          </button>

          <button onClick={() => navigate('/acuarela')}>
            Acuarela
          </button>

          <button onClick={() => navigate('/acrilico')}>
            Acrílico
          </button>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="products">
        <h2>Nuestros Productos</h2>

        <div className="products-grid">
          <div className="product-skeleton"></div>
          <div className="product-skeleton"></div>
          <div className="product-skeleton"></div>
          <div className="product-skeleton"></div>
        </div>
      </section>
    </>
  );
};

export default HomeUser;
