import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import user from "../../assets/user.svg";

import styles from "./Details.module.css";

const Details = ({ location }) => {
  const history = useHistory();

  const [userReports] = useState([
    {
      id: 1,
      date: "06/07/20",
      hour: "15:30:24",
      conductor: "Stinson Barney",
      passenger: "Mosby Ted",
      status: "Finalizado",
      actions: {
        text: "Detalles",
        url: "/",
      },
    },
    {
      id: 2,
      date: "03/07/20",
      hour: "09:30:24",
      conductor: "Specter Harvey",
      passenger: "Mosby Ted",
      status: "Cancelado Cliente",
      actions: {
        text: "Detalles",
        url: "/",
      },
    },
    {
      id: 3,
      date: "03/07/20",
      hour: "08:20:12",
      conductor: "Aldrin Lily",
      passenger: "Mosby Ted",
      status: "Cancelado Socio",
      actions: {
        text: "Detalles",
        url: "/",
      },
    },
    {
      id: 4,
      date: "06/07/20",
      hour: "07:00:24",
      conductor: "Wayne Bruce",
      passenger: "Mosby Ted",
      status: "Anulado",
      actions: {
        text: "Detalles",
        url: "/",
      },
    },
  ]);

  return (
    <div className={styles.detailsContainer}>
      <nav className={styles.detailsNavigation}>
        <span className={styles.sectionHeading} onClick={() => history.goBack()}>
          <ArrowBackIosIcon
            style={{ verticalAlign: "middle", color: "#000000" }}
            fontSize="default"
          />
          Detalles
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
              <span>Fecha Inscripcion:</span> <span>12/01/19</span>
            </div>
            <div className={styles.statusArea}> 
              <div>Estatus:</div>
              <div className={styles.statusButtons}>
                <button>Activo</button>
                <button>Inactivo</button> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.moreInfoLinksContainer}>
        <Link to="/" className={styles.moreInfoLink}>
          Ver Balance
        </Link>
        <Link to={location.pathname + "/edit-profile"} className={styles.moreInfoLink}>
          Editar Perfil
        </Link>
        <Link to="/" className={styles.moreInfoLink}>
          Contactar Cliente
        </Link>
        <Link to="/" className={styles.moreInfoLink}>
          Historial de Viajes
        </Link>
      </div>
      <div className={styles.userReportContainer}>
        <div className={styles.userReportHeader}>
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
        <div className={styles.userReportBody}>
          {userReports.map((userReport) => {
            return (
              <div className={styles.userReport} key={userReport.id}>
                <div className={styles.idBody}>{userReport.id}</div>
                <div className={styles.dateBody}>{userReport.date}</div>
                <div className={styles.hourBody}>{userReport.hour}</div>
                <div className={styles.conductorBody}>
                  {userReport.conductor}
                </div>
                <div className={styles.passengerBody}>
                  {userReport.passenger}
                </div>
                <div className={styles.statusBody}>{userReport.status}</div>
                <div className={styles.actionsBody}>
                  <Link
                    to={location.pathname + userReport.actions.url}
                    className={styles.actionLink}
                  >
                    {userReport.actions.text}
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

export default withRouter(Details);
