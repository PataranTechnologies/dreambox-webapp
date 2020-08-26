import React from 'react';

import styles from "./Communication.module.css";

const Communication = () => {
    return (
        <div className={styles.communicationWrapper}>
            <h2>Comunicación</h2>
            <p>Zendesk</p>
            <div className={styles.image}></div>
        </div>
    );
};

export default Communication;
