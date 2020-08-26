import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import user from "../../assets/user.svg";

import styles from "./CustomerDetailedTravelHistory.module.css";

const CustomerDetailedTravelHistory = ({ location }) => {
  const history = useHistory();

  const [details] = useState({
    date: "12/02/20",
    startingPoint: "Calle 123, Col. Avispa",
    time: "15:40:12",
    stops: "Calle 321, Col. Tigre",
    conductor: "Specter Harvey",
    destination: "Calle 456, Col. León",
    passenger: "Mosby Ted",
    paymentMethod: "Tarjeta Débito Terminación 3429",
    status: "Finalizado",
    estimatedDistance: "2.5 Km",
    distanceTravelled: "2.9 Km",
    estimatedCost: "$250.00",
    routeMap: "",
    finalCost: "$265.00",
  });

  return (
    <div className={styles.travelHistoryContainer}>
      <nav className={styles.travelHistoryNavigation}>
        <span
          className={styles.sectionHeading}
          onClick={() => history.goBack()}
        >
          <ArrowBackIosIcon
            style={{ verticalAlign: "middle", color: "#000000" }}
            fontSize="default"
          />
          Historial de Viajes
        </span>
      </nav>
      <div className={styles.userInfoContainer}>
        <div className={styles.userImage}>
          <img src={user} alt="User" />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userDetails}>
            <p>Mosby Ted</p>
            <p>+506 324 345 </p>
            <p>tedmosby@gmail.com</p>
          </div>
          <div className={styles.otherDetails}>
            <div className={styles.dateArea}>
              <span>Viaje:</span>{" "}
              <span className={styles.period}>
                <span className={styles.date}>12/02/20</span>
              </span>
            </div>
            <div className={styles.downloadReport}>
              <button className={styles.downloadReportButton}>
                Descargar Reporte
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailedTravelHistoryContainer}>
        <div className={styles.details}>
          <div className={styles.entry}>
            <div>Fecha:</div>
            <div>{details.date}</div>
          </div>
          <div className={styles.entry}>
            <div>Punto de Inicio:</div>
            <div>{details.startingPoint}</div>
          </div>
          <div className={styles.entry}>
            <div>Hora:</div>
            <div>{details.time}</div>
          </div>
          <div className={styles.entry}>
            <div>Paradas:</div>
            <div>{details.stops}</div>
          </div>
          <div className={styles.entry}>
            <div>Conductor:</div>
            <div>{details.conductor}</div>
          </div>
          <div className={styles.entry}>
            <div>Destino / Punto Final:</div>
            <div>{details.destination}</div>
          </div>
          <div className={styles.entry}>
            <div>Pasajero:</div>
            <div>{details.passenger}</div>
          </div>
          <div className={styles.entry}>
            <div>Método de Pago:</div>
            <div>{details.paymentMethod}</div>
          </div>
          <div className={styles.entry}>
            <div>Estatus:</div>
            <div>{details.status}</div>
          </div>
          <div className={styles.entry}></div>
          <div className={styles.entry}>
            <div>Distancia Estimada:</div>
            <div>{details.estimatedDistance}</div>
          </div>
          <div className={styles.entry}>
            <div>Distancia Recorrida:</div>
            <div>{details.distanceTravelled}</div>
          </div>
          <div className={styles.entry}>
            <div>Costo Estimado:</div>
            <div>{details.estimatedCost}</div>
          </div>
          <div className={styles.entry}>
            <div>Mapa de Recorrido:</div>
            <div id={styles.map}>
                <div>Recorrido</div>
            </div>
          </div>
          <div className={styles.entry}></div>
          <div className={styles.entry}>
            <div>Costo Final:</div>
            <div>{details.finalCost}</div>
          </div>
        </div>
        <div className={styles.actionSection}>
          <button className={styles.cancelTrip}>Anular Viaje</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CustomerDetailedTravelHistory);
