import React, {useState} from "react";
import { useHistory, Link, withRouter } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import styles from "./TravelHistory.module.css";

const TravelHistory = ({location}) => {
  const history = useHistory();

  const [travelHistories] = useState([
    {
      id: 1,
      date: "06/07/20",
      hour: "15:30:24",
      conductor: "Pitt Brad",
      passenger: "Mosby Ted",
      status: "Finalizado",
      actions: {
        text: "Detalles",
        url: location.pathname,
      },
    },
    {
        id: 2,
        date: "03/07/20",
        hour: "09:30:24",
        conductor: "Specter Harvey",
        passenger: "Mosby Ted",
        status: "Finalizado",
        actions: {
          text: "Detalles",
          url: location.pathname,
        },
      },
      {
        id: 3,
        date: "03/07/20",
        hour: "08:20:23",
        conductor: "Messi Leo",
        passenger: "Mosby Ted",
        status: "Finalizado",
        actions: {
          text: "Detalles",
          url: location.pathname,
        },
      },
      {
        id: 4,
        date: "03/07/20",
        hour: "05:45:32",
        conductor: "Navas Keylor ",
        passenger: "Mosby Ted",
        status: "Finalizado",
        actions: {
          text: "Detalles",
          url: location.pathname,
        },
      },
      {
        id: 5,
        date: "03/07/20",
        hour: "11:23:54",
        conductor: "Ronaldo Cristiano",
        passenger: "Mosby Ted",
        status: "Finalizado",
        actions: {
          text: "Detalles",
          url: location.pathname,
        },
      },
  ]);

  return (
    <div className={styles.travelHistoryContainer}>
      <nav className={styles.travelHistoryNavigation}>
        <span
          className={styles.sectionHeading}
          onClick={() => history.goBack()}
        >
          Historial de Viajes
        </span>
      </nav>
      <div className={styles.userInfoContainer}>
        <div className={styles.userInfo}>
          <div className={styles.otherDetails}>
            <div className={styles.dateArea}>
              <span>Periodo:</span>{" "}
              <span className={styles.period}>
                <span className={styles.date}>12/02/20</span>
                <span>a</span>
                <span className={styles.date}>12/03/20</span>
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
      <div className={styles.travelHistoryContainer}>
        <div className={styles.travelHistoryHeader}>
          <div className={styles.idHeader}>
            ID
            <KeyboardArrowDownIcon
              style={{ verticalAlign: "middle", marginLeft: ".25rem" }}
            />
          </div>
          <div className={styles.dateHeader}>
            Fecha
            <KeyboardArrowDownIcon
              style={{ verticalAlign: "middle", marginLeft: ".25rem" }}
            />
          </div>
          <div className={styles.hourHeader}>
            Hora
            <KeyboardArrowDownIcon
              style={{ verticalAlign: "middle", marginLeft: ".25rem" }}
            />
          </div>
          <div className={styles.conductorHeader}>
            Conductor
            <KeyboardArrowDownIcon
              style={{ verticalAlign: "middle", marginLeft: ".25rem" }}
            />
          </div>
          <div className={styles.passengerHeader}>
            Pasajero
            <KeyboardArrowDownIcon
              style={{ verticalAlign: "middle", marginLeft: ".25rem" }}
            />
          </div>
          <div className={styles.statusHeader}>
            Estatus
            <KeyboardArrowDownIcon
              style={{ verticalAlign: "middle", marginLeft: ".25rem" }}
            />
          </div>
          <div className={styles.actionsHeader}>Acciones</div>
        </div>
        <div className={styles.travelHistoryBody}>
          {travelHistories.map((travelHistory) => {
            return (
              <div className={styles.travelHistory} key={travelHistory.id}>
                <div className={styles.idBody}>{travelHistory.id}</div>
                <div className={styles.dateBody}>{travelHistory.date}</div>
                <div className={styles.hourBody}>{travelHistory.hour}</div>
                <div className={styles.conductorBody}>
                  {travelHistory.conductor}
                </div>
                <div className={styles.passengerBody}>
                  {travelHistory.passenger}
                </div>
                <div className={styles.statusBody}>{travelHistory.status}</div>
                <div className={styles.actionsBody}>
                  <Link
                    to={travelHistory.actions.url + "/details/" + travelHistory.id}
                    className={styles.actionLink}
                  >
                    {travelHistory.actions.text}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(TravelHistory);
