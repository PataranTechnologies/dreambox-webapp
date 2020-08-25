import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import user from "../../assets/user.svg";

import styles from "./VehicleInfo.module.css";

const VehicleInfo = () => {
  const [info] = useState({
    model: "Jetta",
    color: "Rojo",
    year: "2020",
    passengers: "4",
    signs: "MV5 - ZT33",
    acceptsPets: "",
    type: "Chuzo",
    photo: "",
  });

  const history = useHistory();

  return (
    <div className={styles.vehicleInfoContainer}>
      <nav className={styles.vehicleInfoNavigation}>
        <span
          className={styles.sectionHeading}
          onClick={() => history.goBack()}
        >
          <ArrowBackIosIcon
            style={{ verticalAlign: "middle", color: "#000000" }}
            fontSize="default"
          />
          Informacion de Vehiculo
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
      <div className={styles.vehicleInfoWrapper}>
        <div className={styles.vehicleInfo}>
          <div className={styles.entry}>
            <div>Modelo:</div>
            <div>{info.model}</div>
          </div>
          <div className={styles.entry}>
            <div>Color:</div>
            <div>{info.color}</div>
          </div>
          <div className={styles.entry}>
            <div>Año:</div>
            <div>{info.year}</div>
          </div>
          <div className={styles.entry}>
            <div>Pasajeros:</div>
            <div>{info.passengers}</div>
          </div>
          <div className={styles.entry}>
            <div>Placas:</div>
            <div>{info.signs}</div>
          </div>
          <div className={styles.entry}>
            <div>Acepta Mascotas:</div>
            <div id={styles.radioSection}>
                <span className={styles.radioGroup}>
                <input id="yes" type="radio" value="Yes" name="pets"/>
                <label htmlFor="yes">Si</label>
                </span>
                <span className={styles.radioGroup}>
                <input id="no" type="radio" value="No" name="pets"/>
                <label htmlFor="no">No</label>
                </span>
            </div>
          </div>
          <div className={styles.entry}>
            <div>Tipo:</div>
            <div>{info.type}</div>
          </div>
        </div>
        <div className={styles.photoSection}>
          <div className={styles.photo}>
            <p>Foto de Vehiculo</p>
            <div></div>
          </div>
        </div>
        <div className={styles.actionSection}>
          <button className={styles.saveButton}>Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
