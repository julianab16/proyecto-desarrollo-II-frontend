import React from 'react';
import '../styles/shop.css';
import { useNavigate } from 'react-router-dom';

const shop = () => {
  const navigate = useNavigate();

  const items = [
    { id: 1, name: "Nombre de Pintura 1", desc: "Descripción a detalle de las características de la pintura 1", tag: "Más vendidos", price: 30000 },
    { id: 2, name: "Nombre de Pintura 2", desc: "Descripción a detalle de las características de la pintura 1", price: 30000 },
    { id: 3, name: "Nombre de Pintura 3", desc: "Descripción a detalle de las características de la pintura 2", price: 40000 },
  ];

  const total = items.reduce((acc, item) => acc + item.price, 0);

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

      <div className="cart-container">

        {/* Área izquierda */}
        <div className="left-section">

          <div className="select-bar">
            <span className="left">
              <i className="fas fa-check-circle"></i> Todos los artículos ({items.length})
            </span>

            <button className="select-btn">Seleccionar</button>
          </div>

          <h3>Añade artículos adicionales</h3>

          <button className="choose-btn">Elige</button>

          <div className="items-list">
            {items.map(item => (
              <div className="cart-item" key={item.id}>
                <img src="pintura.jpg" alt="pintura" className="item-img" />

                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  {item.tag && <span className="tag">{item.tag}</span>}
                  <p className="price">${item.price.toLocaleString('es-CO')}</p>
                </div>

                <i className="fas fa-trash delete-icon"></i>
              </div>
            ))}
          </div>
        </div>

        {/* Área derecha (Resumen) */}
        <div className="right-section">
          <h3>Resumen del pedido</h3>

          <div className="summary-images">
            {items.map(item => (
              <img key={item.id} src="pintura.jpg" alt="mini" />
            ))}
          </div>

          <hr />

          <p className="summary-price">
            Precio aproximado: <span>${total.toLocaleString('es-CO')}</span>
          </p>

          <button className="pay-btn">Pagar ahora</button>

          <p className="accept">Aceptamos:</p>

          <div className="cards">
            <img src="visa.png" alt="visa" />
            <img src="mastercard.svg" alt="master" />
            <img src="nequi.png" alt="ripley" />
            <img src="bancolombia.png" alt="cmr" />
          </div>
        </div>

      </div>
    </>
  );
};

export default shop;