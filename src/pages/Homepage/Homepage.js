import React, { useState } from "react";
import {useHistory } from "react-router-dom";

import SendEmailModal from "../../UI/Modal/SendEmailModal";
import SentEmailModal from "../../UI/Modal/SentEmailModal";
import Backdrop from "../../UI/Backdrop/Backdrop";

import styles from "./Homepage.module.css";

const Homepage = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [forgotPassModal, setForgotPassModal] = useState(false);
  const [emailSentModal, setEmailSentModal] = useState(false);

  const handleFormInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    history.push("/dashboard");
  };
  
    const handleForgotPass = (event) => {
      event.preventDefault();
      setForgotPassModal(true);
    };

    const handleEmailSend = () => {
      setEmailSentModal(true);
      setForgotPassModal(false);
    }

  return (
    <div className={styles.homepageContainer}>
      {forgotPassModal && <SendEmailModal cancel={() => setForgotPassModal(false)} emailSent={handleEmailSend}/>}
      {forgotPassModal && <Backdrop onCancel={() => setForgotPassModal(false)}/>}
      {emailSentModal && <SentEmailModal cancel={()=> setEmailSentModal(false)}/>}
      {emailSentModal && <Backdrop onCancel={() => setEmailSentModal(false)}/>}
      <form className={styles.loginFormContainer}>
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
        <button className={styles.submitButton}  onClick={handleFormSubmit}>
          Iniciar Sesión
        </button>
        <button onClick={handleForgotPass} className={styles.forgotPasswordLink}>
          ¿Olvidaste tu contraseña?
        </button>
      </form>
    </div>
  );
};

export default Homepage;
