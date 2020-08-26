import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import styles from "./DetailedBankSystem.module.css";

const DetailedBankSystem = () => {
  const history = useHistory();

  const [bankData, setBankData] = useState({
    vehicleType: "",
    baseRate: "",
    mileageRate: "",
    minimumFee: "",
    ratePerMin: "",
    applicationFee: "",
    serviceFee: "",
    cancellationFee: "",
  });

  const handleEditFormInput = (event) => {
    setBankData({ ...bankData, [event.target.name]: event.target.value });
  };

  const handleBankFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.detailBSContainer}>
      <nav className={styles.detailBSNavigation}>
        <div className={styles.sectionHeading} onClick={() => history.goBack()}>
          <ArrowBackIosIcon
            style={{ verticalAlign: "middle", color: "#000000" }}
            fontSize="default"
          />
          Tarifas, Cargos y Comisiones
        </div>
      </nav>
      <div className={styles.detailsSection}>
        <form className={styles.bankForm} onSubmit={handleBankFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Tipo de Vehiculo</label>
            <select>
              <option name="vehicleType" value="Chuzo">Chuzo</option>
              <option name="vehicleType" value="Chuzo1">Chuzo 1</option>
              <option name="vehicleType" value="Chuzo2">Chuzo 2</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="base-rate">Tarifa Base</label>
            <input
              id="base-rate"
              type="text"
              name="baseRate"
              value={bankData.baseRate}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mileage-rate">Tarifa por Distancia</label>
            <input
              id="mileage-rate"
              type="text"
              name="mileageRate"
              value={bankData.mileageRate}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="minimum-fee">Tarifa Minima</label>
            <input
              id="minimum-fee"
              type="text"
              name="minimumFee"
              value={bankData.minimumFee}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="rate-per-min">Tarifa por Minuto</label>
            <input
              id="rate-per-min"
              type="text"
              name="ratePerMin"
              value={bankData.ratePerMin}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="app-fee">Cuota de Solicitud (sobre el monto)</label>
            <input
              id="app-fee"
              type="text"
              name="applicationFee"
              value={bankData.applicationFee}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="service-fee">Tasa de Solicitud (service fee)</label>
            <input
              id="service-fee"
              type="text"
              name="serviceFee"
              value={bankData.serviceFee}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cancel-fee">Cargo por Cancelación</label>
            <input
              id="cancel-fee"
              type="text"
              name="cancellationFee"
              value={bankData.cancellationFee}
              onChange={handleEditFormInput}
              autoComplete="off"
            />
          </div>
          <div className={styles.actionSection}>
            <button type="submit" className={styles.saveButton}>
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailedBankSystem;
