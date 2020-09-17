import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import logo from './logo-azul.png';
const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="sign-up-form">
      
      <form onSubmit={handleSignUp}>
      <img src={logo} alt="Logo" width="200" height="200" />
      <h2 className="title">Registrarse</h2>
      <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input name="email" type="email" placeholder="Email:" />
      </div>
      <div className="input-field">
              <i className="fas fa-lock"></i>
              <input name="password" type="password" placeholder="Contraseña:" />
      </div>
        
        <button className="btn" type="submit">Registrarse</button>
        <p className="social-text">O registrate con otras plataformas</p>
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
  );
};

export default withRouter(SignUp);
