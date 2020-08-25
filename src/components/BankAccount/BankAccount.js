import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import user from "../../assets/user.svg";

import styles from "./BankAccount.module.css";

const BankAccount = () => {
  const history = useHistory();

  return (
    <div className={styles.bankAccountContainer}>
      <nav className={styles.bankAccountNavigation}>
        <span
          className={styles.sectionHeading}
          onClick={() => history.goBack()}
        >
          <ArrowBackIosIcon
            style={{ verticalAlign: "middle", color: "#000000" }}
            fontSize="default"
          />
          Cuenta Bancaria
        </span>
      </nav>
      <div className={styles.userInfoContainer}>
        <div className={styles.userImage}>
          <img src={user} alt="User" />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userDetails}>
            <p>Pitt Brad</p>
            <p>+506 324 345 </p>
            <p>pittbrad@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.bankAccountWrapper}>
          <div className={styles.details}>
              <h2>Datos Bancarios</h2>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <div className={styles.saveButton}>
                  <button>Guardar</button>
              </div>
          </div>
          <div className={styles.image}>
              <h2>Carátula Bancaria (Imagen)</h2>
              <div></div>
          </div>
      </div>
    </div>
  );
};

export default BankAccount;
