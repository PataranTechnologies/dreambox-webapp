import React from "react";
import CloseIcon from "@material-ui/icons/Close";

import styles from "./Modal.module.css";

const SentEmailModal = ({cancel}) => {
  return (
    <div className={styles.modalContainer}>
      <h2>¡Gracias! Hemos enviado un email con una nueva contraseña de acceso.</h2>
      <CloseIcon style={{verticalAlign: "middle", position: "absolute", top: ".75rem", right: ".75rem", cursor: "pointer"}} fontSize="large" onClick={cancel}/>
    </div>
  );
};

export default SentEmailModal;
