import React, { useState } from "react";

import styles from "./Homepage.module.css";
import { Link, useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    history.push("/dashboard");
  };

  return (
    <div className={styles.homepageContainer}>
      <form className={styles.loginFormContainer} onSubmit={handleFormSubmit}>
        <h2 className={styles.loginHeading}>
          ¡Bienvenido a Ride Administrador!
        </h2>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormInput}
          placeholder="Email / Usuario"
          className={styles.formInput}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormInput}
          placeholder="Contraseña"
          className={styles.formInput}
          autoComplete="off"
        />
        <button type="submit" className={styles.submitButton}>
          Iniciar Sesión
        </button>
        <Link to="/" className={styles.forgotPasswordLink}>
          ¿Olvidaste tu contraseña?
        </Link>
      </form>
    </div>
  );
};

export default Homepage;
