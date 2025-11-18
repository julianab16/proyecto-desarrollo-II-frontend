import "../styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerRequest } from "../api/auth.api";

export const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== password2) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    try {
      const res = await registerRequest({
        username,
        first_name: firstName,
        last_name: lastName,
        email,
        dni,
        phone_number: phone,
        role: "CLIENTE",
        password,
      });

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/");
    } catch (err) {
      setErrorMessage(
        err.response?.data?.detail ||
        JSON.stringify(err.response?.data) ||
        "Error al registrarse."
      );
    }
  };

  return (
    <>
      <header className="site-header">
        {/* ... tu header igual */}
      </header>

      <main>
        <div className="container-register">
          <form className="register-card" onSubmit={handleSubmit}>
            <h2>Regístrate</h2>
            <p>Crea una cuenta para comenzar a comprar</p>

            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}

            <div className="register-form">

              <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="text"
                placeholder="Nombre"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Cédula"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />

              <input
                type="text"
                placeholder="Número de Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="Confirma Contraseña"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>

            <button className="btn submit-btn" type="submit">
              Registrarse
            </button>

            <div className="signup-prompt">
              <span>¿Ya tienes una cuenta? </span>
              <Link to="/login" className="signup-link">
                Inicia Sesión aquí
              </Link>
            </div>
          </form>
        </div>
      </main>

      <footer className="site-footer">
        {/*...*/}
      </footer>
    </>
  );
};

export default Register;
