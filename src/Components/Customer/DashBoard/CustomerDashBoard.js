import React from "react";
import { useSelector } from "react-redux";

import "./CustomerDashBoard.scss";
import Header from "./Header/Header.js";
import Sidenav from "./SideNav/Sidenav";
import Body from "./Body/Body";

function CustomerDashBoard() {
  const MenuStatus = useSelector((state) => state.MenuStatus);

  console.log(MenuStatus);
  return (
    <div className="customer-Dashboard-Container">
      <div className="sub-Container">
        <div className="header">
          <Header />
        </div>
        <div className="main-Container">
          <div className={MenuStatus ? "sidenave1" : "sidenave2"}>
            <Sidenav />
          </div>
          <div className={MenuStatus ? "main-Body1" : "main-Body2"}>
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerDashBoard;
