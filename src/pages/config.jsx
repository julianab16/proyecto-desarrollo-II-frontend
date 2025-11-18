import "../styles/config.css";
import { Link, useNavigate } from "react-router-dom";

export const Config = () => {
  const navigate = useNavigate();
  return (
    <>
    <header className="site-header">
        <div className="container header-inner">
          <div className="logo">L'ATELIER</div>
          <nav className="main-nav">
            
          </nav>
          <div className="auth">
            
            <button
              className="btn btn-primary"
              onClick={() => navigate("/#")}
            >
              Regresar
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="container-register">
          <form className="register-card">
            <div className="logo-style"></div>
            <h2>Edita Tu Perfil</h2>
            <p> </p>

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

                

            </div>

            <button className="btn submit-btn">Editar Perfil</button>


            <div className="signup-prompt">
            <span>eliminar cuenta </span>
            
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

export default Config;