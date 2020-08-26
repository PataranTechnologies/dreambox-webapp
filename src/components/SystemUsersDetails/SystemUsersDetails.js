import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import user from "../../assets/user.svg";

import styles from "./SystemUsersDetails.module.css";

const SystemUsersDetails = () => {
  const history = useHistory();

  const [userData] = useState({
    name: "Warren",
    lastName: "Castro",
    motherLastName: "Martinez",
    telephone: "123 456 3444",
    email: "w.castro@ride.com",
    role: "",
    password: "",
    lastConnection: {
      date: "12/07/20",
      time: "14:30:45",
    },
  });

  return (
    <div className={styles.userContainer}>
      <nav className={styles.userNavigation}>
        <div className={styles.sectionHeading} onClick={() => history.goBack()}>
          <ArrowBackIosIcon
            style={{ verticalAlign: "middle", color: "#000000" }}
            fontSize="default"
          />
          Detalles
        </div>
        <div className={styles.statusArea}>
          <div>Estatus:</div>
          <div className={styles.statusButtons}>
            <button>Activo</button>
            <button>Inactivo</button>
          </div>
        </div>
      </nav>
      <div className={styles.userSection}>
        <div className={styles.userArea}>
          <div className={styles.userInfo}>
            <div className={styles.userImage}>
              <img src={user} alt="User" />
            </div>
            <div className={styles.textGroup}>
              <h2>Nombre</h2>
              <p>{userData.name}</p>
            </div>
            <div className={styles.textGroup}>
              <h2>Apellido Paterno</h2>
              <p>{userData.lastName}</p>
            </div>
            <div className={styles.textGroup}>
              <h2>Apellido Materno</h2>
              <p>{userData.motherLastName}</p>
            </div>
            <div className={styles.textGroup}>
              <h2>Teléfono</h2>
              <p>{userData.telephone}</p>
            </div>
            <div className={styles.textGroup}>
              <h2>Email</h2>
              <p>{userData.email}</p>
            </div>
            <div className={styles.textGroup}>
              <h2>Rol</h2>
              <select>
                <option value="Administrator">Administrador</option>
                <option value="Administrator1">Administrador 1</option>
                <option value="Administrator2">Administrador 2</option>
              </select>
            </div>
            <div className={styles.textGroup}>
              <h2>Última Conexión</h2>
              <p>
                {userData.lastConnection.date} - {userData.lastConnection.time}
              </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemUsersDetails;
