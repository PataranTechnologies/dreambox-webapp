import React, { useState } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import ContactsIcon from "@material-ui/icons/Contacts";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import ViewListIcon from "@material-ui/icons/ViewList";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Start from "../../components/Start/Start";
import Customers from "../../components/Customers/Customers";
import Details from "../../components/Details/Details";
import EditProfile from "../../components/EditProfile/EditProfile";
import Balance from "../../components/Balance/Balance";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(searchInput);
  };
  return (
    <div className={styles.dashboardContainer}>
      <nav className={styles.dashboardNavigationContainer}>
        <div className={styles.dashboardNavigation}>
          <div className={styles.profile}>
            <AccountCircleIcon
              fontSize="large"
              style={{ verticalAlign: "middle", marginRight: "1rem" }}
            />
            <h3 className={styles.userName}>Warren Castro</h3>
          </div>
          <form className={styles.searchArea} onSubmit={handleSearchSubmit}>
            <input
              type="text"
              name="search"
              value={searchInput}
              placeholder="Búsqueda Rápida"
              onChange={handleSearchInput}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              Buscar
            </button>
          </form>
        </div>
      </nav>
      <div className={styles.sideBar}>
        <NavLink
          className={styles.sideBarLink}
          activeClassName={styles.active}
          to="/dashboard"
          exact
        >
          <DesktopMacIcon
            fontSize="large"
            style={{ verticalAlign: "middle", marginRight: "1rem" }}
          />{" "}
          <span>Inicio</span>
        </NavLink>
        <NavLink
          className={styles.sideBarLink}
          activeClassName={styles.active}
          to="/dashboard/customers"
        >
          <ContactsIcon
            fontSize="large"
            style={{ verticalAlign: "middle", marginRight: "1rem" }}
          />{" "}
          <span>Clientes</span>
        </NavLink>
        <NavLink
          className={styles.sideBarLink}
          activeClassName={styles.active}
          to="/dashboard/partners"
        >
          <RecentActorsIcon
            fontSize="large"
            style={{ verticalAlign: "middle", marginRight: "1rem" }}
          />{" "}
          <span>Socios</span>
        </NavLink>
        <NavLink
          className={styles.sideBarLink}
          activeClassName={styles.active}
          to="/dashboard/travel-history"
        >
          <ViewListIcon
            fontSize="large"
            style={{ verticalAlign: "middle", marginRight: "1rem" }}
          />{" "}
          <span>Historial Viajes</span>
        </NavLink>
        <NavLink
          className={styles.sideBarLink}
          activeClassName={styles.active}
          to="/dashboard/communication"
        >
          <MailOutlineIcon
            fontSize="large"
            style={{ verticalAlign: "middle", marginRight: "1rem" }}
          />{" "}
          <span>Comunicación</span>
        </NavLink>
        <NavLink
          className={styles.sideBarLink}
          activeClassName={styles.active}
          to="/dashboard/banking-system"
        >
          <AttachMoneyIcon
            fontSize="large"
            style={{ verticalAlign: "middle", marginRight: "1rem" }}
          />{" "}
          <span>Sistema de Banca</span>
        </NavLink>
        <NavLink
          className={styles.sideBarLink}
          activeClassName={styles.active}
          to="/dashboard/system-users"
        >
          <PeopleAltIcon
            fontSize="large"
            style={{ verticalAlign: "middle", marginRight: "1rem" }}
          />{" "}
          <span>Usuarios Sistema</span>
        </NavLink>
        <NavLink
          className={styles.sideBarLink}
          activeClassName={styles.active}
          to="/dashboard/sign-off"
        >
          <ExitToAppIcon
            fontSize="large"
            style={{ verticalAlign: "middle", marginRight: "1rem" }}
          />{" "}
          <span>Cerrar Sesión</span>
        </NavLink>
      </div>
      <div className={styles.mainContainer}>
        <Switch>
          <Route path="/dashboard" exact>
            <Start/>
          </Route>
          <Route path="/dashboard/customers" exact>
            <Customers/>
          </Route>
          <Route path="/dashboard/customers/details" exact>
            <Details/>
          </Route>
          <Route path="/dashboard/customers/details/edit-profile">
            <EditProfile/>
          </Route>
          <Route path="/dashboard/customers/details/view-balance">
            <Balance/>
          </Route>
          <Route path="/dashboard/partners">
            <div>Partners</div>
          </Route>
          <Route path="/dashboard/travel-history">
            <div>Travel History</div>
          </Route>
          <Route path="/dashboard/communication">
            <div>Communication</div>
          </Route>
          <Route path="/dashboard/banking-system">
            <div>Banking System</div>
          </Route>
          <Route path="/dashboard/system-users">
            <div>System Users</div>
          </Route>
          <Route path="/dashboard/sign-off">
            <div>Sign Off</div>
          </Route>
          <Redirect to="/dashboard" />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;