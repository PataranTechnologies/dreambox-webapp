import React from 'react';

import styles from "./Backdrop.module.css";

const Backdrop = ({onCancel}) => {
    return (
        <div className={styles.backdropContainer} onClick={onCancel}>
            <h2>¡Bienvenido a Ride Administrador!</h2>
        </div>
    );
};

export default Backdrop;
