import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EditIcon from "@material-ui/icons/Edit";

import user from "../../assets/user.svg";

import styles from "./AddSystemUsers.module.css";

const AddSystemUsers = () => {
  const history = useHistory();

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    motherLastName: "",
    telephone: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const handleAddFormInput = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.addUserContainer}>
      <nav className={styles.addUserNavigation}>
        <div className={styles.sectionHeading} onClick={() => history.goBack()}>
          <ArrowBackIosIcon
            style={{ verticalAlign: "middle", color: "#000000" }}
            fontSize="default"
          />
          Agregar Usuario
        </div>
        <div className={styles.statusArea}>
          <div>Estatus:</div>
          <div className={styles.statusButtons}>
            <button>Activo</button>
            <button>Inactivo</button>
          </div>
        </div>
      </nav>
      <div className={styles.addingSection}>
        <form className={styles.addUserForm} onSubmit={handleAddFormSubmit}>
          <div className={styles.userInfo}>
            <div className={styles.userImage}>
              <img src={user} alt="User" />
              <EditIcon
              fontSize="small"
                style={{
                  verticalAlign: "middle",
                  position: "absolute",
                  top: ".5rem",
                  right: ".5rem",
                  cursor: "pointer",
                  padding: ".015rem",
                  border: "1.5px solid #000000",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                type="text"
                name="name"
                value={userData.name}
                onChange={handleAddFormInput}
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
                onChange={handleAddFormInput}
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
                onChange={handleAddFormInput}
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
                onChange={handleAddFormInput}
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
                onChange={handleAddFormInput}
                autoComplete="off"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="role">Rol</label>
              <select
                id="role"
                name="role"
                value={userData.role}
                onChange={handleAddFormInput}
              >
                <option value="Administrator">Administrador</option>
                <option value="Administrator1">Administrador 1</option>
                <option value="Administrator2">Administrador 2</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                name="password"
                value={userData.password}
                onChange={handleAddFormInput}
                autoComplete="off"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirm-password">Confirmar Contraseña</label>
              <input
                id="confirm-password"
                type="text"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleAddFormInput}
                autoComplete="off"
              />
            </div>
          </div>
          <div className={styles.permissions}>
            <h2>Permisos</h2>
            <div className={styles.set}>
              <h3>Módulos</h3>
              <div className={styles.options}>
                <div className={styles.option}>
                  <input type="checkbox" name="" value="" />
                  <label htmlFor="">Clientes</label>
                </div>
                <div className={styles.option}>
                  <input type="checkbox" name="" value="" />
                  <label htmlFor="">Comunicación</label>
                </div>
                <div className={styles.option}>
                  <input type="checkbox" name="" value="" />
                  <label htmlFor="">Socios</label>
                </div>
                <div className={styles.option}>
                  <input type="checkbox" name="" value="" />
                  <label htmlFor="">Usuarios Sistema</label>
                </div>
                <div className={styles.option}>
                  <input type="checkbox" name="" value="" />
                  <label htmlFor="">Historial Viajes</label>
                </div>
              </div>
            </div>
            <div className={styles.set}>
              <h3>Banca</h3>
              <div className={styles.options}>
                <div className={styles.option}>
                  <input type="checkbox" name="" value="" />
                  <label htmlFor="">Balance Interno</label>
                </div>
                <div className={styles.option}>
                  <input type="checkbox" name="" value="" />
                  <label htmlFor="">Promociones</label>
                </div>
                <div className={styles.option}>
                  <input type="checkbox" name="" value="" />
                  <label htmlFor="">Balance Clientes</label>
                </div>
                <div className={styles.option}>
                  <input type="checkbox" name="" value="" />
                  <label htmlFor="">Bonificaciones</label>
                </div>
                <div className={styles.option}>
                  <input type="checkbox" name="" value="" />
                  <label htmlFor="">Balance Socios</label>
                </div>
                <div className={styles.option}>
                  <input type="checkbox" name="" value="" />
                  <label htmlFor="">Tarifas, Cargos, Comisiones</label>
                </div>
              </div>
              <div className={styles.actionSection}>
                <button type="submit" className={styles.saveButton}>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSystemUsers;
