import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EditIcon from "@material-ui/icons/Edit";

import user from "../../assets/user.svg";

import styles from "./EditProfile.module.css";

const EditProfile = () => {
  const history = useHistory();

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    motherLastName: "",
    telephone: "",
    email: "",
    address: "",
  });

  const handleEditFormInput = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value});
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.editProfileContainer}>
      <nav className={styles.editProfileNavigation}>
        <div className={styles.sectionHeading} onClick={() => history.goBack()}>
          <ArrowBackIosIcon
            style={{ verticalAlign: "middle", color: "#000000" }}
            fontSize="default"
          />
          Editar Perfil
        </div>
        <div className={styles.statusArea}>
          <div>Estatus:</div>
          <div className={styles.statusButtons}>
            <button>Activo</button>
            <button>Inactivo</button>
          </div>
        </div>
      </nav>
      <div className={styles.editingSection}>
        <div className={styles.userImage}>
          <img src={user} alt="User" />
          <EditIcon
            style={{
              verticalAlign: "middle",
              position: "absolute",
              top: "1rem",
              right: "1rem",
              cursor: "pointer",
              padding: ".05rem",
              border: "1.5px solid #000000",
              borderRadius: "4px",
            }}
          />
        </div>
        <form className={styles.editUserForm} onSubmit={handleEditFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              value={userData.name}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="last-name">Apellido Paterno</label>
            <input
              id="last-name"
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mother-last-name">Apellido Materno</label>
            <input
              id="mother-last-name"
              type="text"
              name="motherLastName"
              value={userData.motherLastName}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telephone">Teléfono</label>
            <input
              id="telephone"
              type="text"
              name="telephone"
              value={userData.telephone}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Dirección Provincia</label>
            <input
              id="address"
              type="text"
              name="address"
              value={userData.address}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <button type="submit" className={styles.saveButton}>Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
