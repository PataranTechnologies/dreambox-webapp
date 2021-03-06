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
import CustomerDetails from "../../components/CustomerDetails/CustomerDetails";
import EditProfile from "../../components/EditProfile/EditProfile";
import Balance from "../../components/Balance/Balance";
import PartnerBalance from "../../components/PartnerBalance/PartnerBalance";
import CustomerTravelHistory from "../../components/CustomerTravelHistory/CustomerTravelHistory";
import CustomerDetailedTravelHistory from "../../components/CustomerDetailedTravelHistory/CustomerDetailedTravelHistory";
import Partners from "../../components/Partners/Partners";
import PartnerDetails from "../../components/PartnerDetails/PartnerDetails";
import VehicleInfo from "../../components/VehicleInfo/VehicleInfo";
import BankAccount from "../../components/BankAccount/BankAccount";
import Documentation from "../../components/Documentation/Documentation";
import TravelHistory from "../../components/TravelHistory/TravelHistory";
import DetailedTravelHistory from "../../components/DetailedTravelHistory/DetailedTravelHistory";
import PartnerTravelHistory from "../../components/PartnerTravelHistory/PartnerTravelHistory";
import PartnerDetailedTravelHistory from "../../components/PartnerDetailedTravelHistory/PartnerDetailedTravelHistory";
import Communication from "../../components/Communication/Communication";
import BankingSystem from "../../components/BankingSystem/BankingSystem";
import DetailedBankSystem from "../../components/DetailedBankSystem/DetailedBankSystem";
import SystemUsers from "../../components/SystemUsers/SystemUsers";
import SystemUsersDetails from "../../components/SystemUsersDetails/SystemUsersDetails";
import AddSystemUsers from "../../components/AddSystemUsers/AddSystemUsers";
import EditSystemUsers from "../../components/EditSystemUsers/EditSystemUsers";


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
            <Start />
          </Route>
          <Route path="/dashboard/customers" exact>
            <Customers />
          </Route>
          <Route path="/dashboard/customers/details" exact>
            <CustomerDetails />
          </Route>
          <Route path="/dashboard/customers/details/edit-profile">
            <EditProfile />
          </Route>
          <Route path="/dashboard/customers/details/view-balance">
            <Balance />
          </Route>
          <Route path="/dashboard/customers/details/travel-history" exact>
            <CustomerTravelHistory />
          </Route>
          <Route path="/dashboard/customers/details/travel-history/:id">
            <CustomerDetailedTravelHistory />
          </Route>
          <Route path="/dashboard/partners" exact>
            <Partners />
          </Route>
          <Route path="/dashboard/partners/details" exact>
            <PartnerDetails />
          </Route>
          <Route path="/dashboard/partners/details/vehicle-info">
            <VehicleInfo />
          </Route>
          <Route path="/dashboard/partners/details/bank-account">
            <BankAccount />
          </Route>
          <Route path="/dashboard/partners/details/view-balance">
            <PartnerBalance />
          </Route>
          <Route path="/dashboard/partners/details/edit-profile">
            <EditProfile />
          </Route>
          <Route path="/dashboard/partners/details/documentation">
            <Documentation />
          </Route>
          <Route path="/dashboard/partners/details/travel-history" exact>
            <PartnerTravelHistory />
          </Route>
          <Route path="/dashboard/partners/details/travel-history/:id">
            <PartnerDetailedTravelHistory />
          </Route>
          <Route path="/dashboard/travel-history" exact>
            <TravelHistory/>
          </Route>
          <Route path="/dashboard/travel-history/details/:id">
            <DetailedTravelHistory/>
          </Route>
          <Route path="/dashboard/communication">
            <Communication/>
          </Route>
          <Route path="/dashboard/banking-system" exact>
            <BankingSystem/>
          </Route>
          <Route path="/dashboard/banking-system/bank-details">
            <DetailedBankSystem/>
          </Route>
          <Route path="/dashboard/system-users" exact>
            <SystemUsers/>
          </Route>
          <Route path="/dashboard/system-users/details">
            <SystemUsersDetails/>
          </Route>
          <Route path="/dashboard/system-users/add">
            <AddSystemUsers/>
          </Route>
          <Route path="/dashboard/system-users/edit">
            <EditSystemUsers/>
          </Route>
          <Route path="/dashboard/sign-off">
            <Redirect to="/"/>
          </Route>
          <Redirect to="/dashboard" />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
