import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import user from "../../assets/user.svg";

import styles from "./PartnerDetails.module.css";

const PartnerDetails = ({ location }) => {
  const history = useHistory();

  const [partnerReports] = useState([
    {
      id: 1,
      date: "06/07/20",
      hour: "15:30:24",
      conductor: "Pitt Brad",
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
      conductor: "Pitt Brad",
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
      conductor: "Pitt Brad",
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
      conductor: "Pitt Brad",
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
            <p>Pitt Brad</p>
            <p>+506 324 345 </p>
            <p>pittbrad@gmail.com</p>
          </div>
          <div className={styles.otherDetails}>
            <div className={styles.dateArea}>
              <span>Fecha Inscripcion:</span> <span>12/01/19</span>
            </div>
            <div className={styles.statusArea}> 
              <div className={styles.detailLinks}>
                <Link to={location.pathname + "/vehicle-info"}>Información de Vehículo<KeyboardArrowRightIcon style={{ verticalAlign: "middle", marginLeft: ".25rem", cursor: "pointer" }}/></Link>
                <Link to={location.pathname + "/bank-account"}>Cuenta Bancaria<KeyboardArrowRightIcon style={{ verticalAlign: "middle", marginLeft: ".25rem", cursor: "pointer" }}/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.moreInfoLinksContainer}>
        <Link to={location.pathname + "/view-balance"} className={styles.moreInfoLink}>
          Ver Balance
        </Link>
        <Link to={location.pathname + "/edit-profile"} className={styles.moreInfoLink}>
          Editar Perfil
        </Link>
        <Link to="/" className={styles.moreInfoLink}>
        Contactar Socio
        </Link>
        <Link to={location.pathname + "/travel-history"} className={styles.moreInfoLink}>
          Historial de Viajes
        </Link>
        <Link to={location.pathname + "/documentation"} className={styles.moreInfoLink}>
        Documentación
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
          {partnerReports.map((partnerReport) => {
            return (
              <div className={styles.userReport} key={partnerReport.id}>
                <div className={styles.idBody}>{partnerReport.id}</div>
                <div className={styles.dateBody}>{partnerReport.date}</div>
                <div className={styles.hourBody}>{partnerReport.hour}</div>
                <div className={styles.conductorBody}>
                  {partnerReport.conductor}
                </div>
                <div className={styles.passengerBody}>
                  {partnerReport.passenger}
                </div>
                <div className={styles.statusBody}>{partnerReport.status}</div>
                <div className={styles.actionsBody}>
                  <Link
                    to={location.pathname + partnerReport.actions.url}
                    className={styles.actionLink}
                  >
                    {partnerReport.actions.text}
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

export default withRouter(PartnerDetails);
