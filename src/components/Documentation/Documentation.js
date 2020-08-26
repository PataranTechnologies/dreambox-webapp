import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import user from "../../assets/user.svg";

import styles from "./Documentation.module.css";

const Documentation = () => {
  const history = useHistory();

  return (
    <div className={styles.docContainer}>
      <nav className={styles.docNavigation}>
        <span
          className={styles.sectionHeading}
          onClick={() => history.goBack()}
        >
          <ArrowBackIosIcon
            style={{ verticalAlign: "middle", color: "#000000" }}
            fontSize="default"
          />
          Documentación
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
      <div className={styles.docsWrapper}>
        <div className={styles.docs}>
          <div className={styles.doc}>
            <h3>Psaporte</h3>
            <div></div>
          </div>
          <div className={styles.doc}>
            <h3>Licencia</h3>
            <div></div>
          </div>
          <div className={styles.doc}>
            <h3>RTV</h3>
            <div></div>
          </div>
          <div className={styles.doc}>
            <h3>Hoja Delincuencia</h3>
            <div></div>
          </div>
          <div className={styles.doc}>
            <h3>Marchamo</h3>
            <div></div>
          </div>
        </div>
        <div className={styles.saveButton}>
          <button>Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
