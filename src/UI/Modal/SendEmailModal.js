import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

import styles from "./Modal.module.css";

const SendEmailModal = ({cancel, emailSent}) => {
  const [backupEmail, setBackupEmail] = useState("");

  const handleBackupEmailInput = (event) => {
    setBackupEmail(event.target.value);
  }

  return (
    <div className={styles.modalContainer}>
      <h2>Ingresa tu email para reestablecer tu contraseña</h2>
      <input
        type="email"
        name="backupEmail"
        value={backupEmail}
        onChange={handleBackupEmailInput}
        className={styles.emailInput}
      />
      <button className={styles.sendButton} onClick={emailSent}>Reestablecer Contraseña</button>
      <CloseIcon style={{verticalAlign: "middle", position: "absolute", top: ".75rem", right: ".75rem", cursor: "pointer"}} fontSize="large" onClick={cancel}/>
    </div>
  );
};

export default SendEmailModal;
