import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import styles from "./SystemUsers.module.css";
import { Link } from "react-router-dom";

const SystemUsers = ({ location }) => {
  const [clientInput, setClientInput] = useState("");

  const [adminInfo] = useState([
    {
      id: 1,
      name: "Castro Warren",
      mail: "warren@ride.com ",
      lastConnection: {
        date: "06/07/20",
        time: "15:04:30",
      },
      role: "Administrador",
      status: "Activo",
      actions: [
        { text: "Detalles", url: "/details" },
        { text: "Suspender", url: "/suspend" },
        { text: "Editar", url: "/edit" },
      ],
    },
  ]);

  const handleClientSearchInput = (event) => {
    setClientInput(event.target.value);
  };

  const handleClientSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.customersContainer}>
      <div className={styles.customersHeader}>
        <div className={styles.customerAdminHeading}>Usuarios de Sistema</div>
        <div className={styles.otherSection}>
          <Link to={location.pathname + "/add"} className={styles.addUser}>
            + Nuevo Usuario
          </Link>
          <form
            onSubmit={handleClientSearchSubmit}
            className={styles.clientForm}
          >
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
          <div className={styles.mailHeader}>
            Correo
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
          <div className={styles.lastConnectionHeader}>
            Última Conexión
            <KeyboardArrowDownIcon
              style={{ verticalAlign: "middle", marginLeft: ".25rem" }}
            />
          </div>
          <div className={styles.roleHeader}>
            Rol
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
                <div className={styles.mailBody}>{info.mail}</div>
                <div className={styles.statusBody}>{info.status}</div>
                <div className={styles.lastConnectionBody}>
                  {info.lastConnection.date} - {info.lastConnection.time}
                </div>
                <div className={styles.roleBody}>{info.role}</div>
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

export default withRouter(SystemUsers);
