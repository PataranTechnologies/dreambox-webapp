import React from 'react';

import styles from "./Start.module.css";

const Start = () => {
    return (
        <div className={styles.startScreenContainer}>
            <div className={styles.section}>
                <h2 className={styles.sectionHeading}>Balance</h2>
                <div className={styles.sectionBody}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionHeading}>Usuarios y Conductores</h2>
                <div className={styles.sectionBody}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionHeading}>Viajes</h2>
                <div className={styles.sectionBody}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionHeading}>Nuevos Conductores</h2>
                <div className={styles.sectionBody}>
                    <h3>Tabla de Conductores Recientes</h3>
                    <p>Tabla de Conductores Recientes</p>
                </div>
            </div>
        </div>
    );
};

export default Start;
