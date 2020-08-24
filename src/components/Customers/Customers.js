import React, { useState } from "react";
import {withRouter} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import styles from "./Customers.module.css";
import { Link } from "react-router-dom";

const Customers = ({location}) => {
  const [clientInput, setClientInput] = useState("");

  const [adminInfo] = useState([
    {
      id: 1,
      name: "Mosby Ted",
      telephone: "+506 324 345 4567",
      mail: "ted@gmail.com",
      lastTrip: {
        date: "06/07/20",
        time: "15:04:30",
      },
      status: "Activo",
      actions: [
        { text: "Detalles", url: "/details" },
        { text: "Suspender", url: "/suspend" },
        { text: "Editar", url: "/edit" },
      ],
    },
    {
      id: 2,
      name: "Harper Charilie",
      telephone: "+506 324 345 4567",
      mail: "ch1@gmail.com",
      lastTrip: {
        date: "05/07/20",
        time: "11:04:30",
      },
      status: "Suspendido",
      actions: [
        { text: "Detalles", url: "/details" },
        { text: "Habilitar", url: "/enable" },
        { text: "Editar", url: "/edit" },
      ],
    },
  ]);

  const handleClientSearchInput = (event) => {
    setClientInput(event.target.value);
  };

  const handleClientSearchSubmit = (event) => {
    event.preventDefault();
    console.log("fds");
  };

  return (
    <div className={styles.customersContainer}>
      <div className={styles.customersHeader}>
        <div className={styles.customerAdminHeading}>
          Administración de Clientes
        </div>
        <form onSubmit={handleClientSearchSubmit} className={styles.clientForm}>
          <SearchIcon
            style={{ verticalAlign: "middle", marginRight: ".5rem" }}
            fontSize="large"
          />
          <input
            type="text"
            name="client"
            value={clientInput}
            placeholder="Buscar Cliente"
            onChange={handleClientSearchInput}
            className={styles.input}
          />
        </form>
      </div>
      <div className={styles.adminInfoContainer}>
        <div className={styles.adminInfoHeader}>
          <div className={styles.idHeader}>
            ID
            <KeyboardArrowDownIcon
              style={{ verticalAlign: "middle", marginLeft: ".25rem" }}
            />
          </div>
          <div className={styles.nameHeader}>
            Nombre
            <KeyboardArrowDownIcon
              style={{ verticalAlign: "middle", marginLeft: ".25rem" }}
            />
          </div>
          <div className={styles.telephoneHeader}>
            Teléfono
            <KeyboardArrowDownIcon
              style={{ verticalAlign: "middle", marginLeft: ".25rem" }}
            />
          </div>
          <div className={styles.mailHeader}>
            Correo
            <KeyboardArrowDownIcon
              style={{ verticalAlign: "middle", marginLeft: ".25rem" }}
            />
          </div>
          <div className={styles.lastTripHeader}>
            Último Viaje
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
        <div className={styles.adminInfoBody}>
          {adminInfo.map((info) => {
            return (
              <div className={styles.adminInfo} key={info.id}>
                <div className={styles.idBody}>{info.id}</div>
                <div className={styles.nameBody}>{info.name}</div>
                <div className={styles.telephoneBody}>{info.telephone}</div>
                <div className={styles.mailBody}>{info.mail}</div>
                <div className={styles.lastTripBody}>
                  {info.lastTrip.date} - {info.lastTrip.time}
                </div>
                <div className={styles.statusBody}>{info.status}</div>
                <div className={styles.actionsBody}>
                  {info.actions.map((action, index) => {
                    return (
                      <Link
                        to={location.pathname + action.url}
                        className={styles.actionLink}
                        key={action + index}
                      >
                        {action.text}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Customers);
