import React from 'react';
import {withRouter, Link} from "react-router-dom";

import styles from "./BankingSystem.module.css";

const BankingSystem = ({location}) => {
    return (
        <div className={styles.bankSysWrapper}>
            <h2>Sistema de Banca</h2>
            <div className={styles.systems}>
                <div className={styles.system}>
                    <Link to={location.pathname + "/bank-details"}>Balance Interno</Link>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.system}>
                    <Link to={location.pathname + "/bank-details"}>Balance de Clientes</Link>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.system}>
                    <Link to={location.pathname + "/bank-details"}>Balance de Socios</Link>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.system}>
                    <Link to={location.pathname + "/bank-details"}>Tarifas, Cargos y Comisiones</Link>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.system}>
                    <Link to={location.pathname + "/bank-details"}>Promociones</Link>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.system}>
                    <Link to={location.pathname + "/bank-details"}>Bonificaciones</Link>
                    <div className={styles.image}></div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(BankingSystem);
