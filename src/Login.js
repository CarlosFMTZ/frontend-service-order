import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import logo from './logo-azul.png'; 

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
    <div>
    <div>
    
      <form onSubmit={handleLogin}>
      <img src={logo} alt="Logo" width="200" height="200" />
         <h2 className="title">Iniciar Sesión</h2>
        <div className="input-field">
              <i className="fas fa-user"></i>
              <input name="email" type="email" placeholder="Usuario:" />
        </div>
        <div className="input-field">
              <i className="fas fa-lock"></i>
              <input name="password" type="password" placeholder="Contraseña:" />
        </div>
        <button type="submit" className="btn solid">Iniciar Sesión</button>
        <p className="social-text">O inicia sesion en otras plataformas</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
