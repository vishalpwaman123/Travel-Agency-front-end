import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./header.scss";
import { sideNavStatus } from "../../../../Redux";

import IconButton from "@material-ui/core/IconButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Button from "@material-ui/core/Button";

function Header() {
  const dispatch = useDispatch();

  return (
    <div className="header-Container">
      <div className="sub-Container">
        <div className="menu-Icon">
          <IconButton
            edge="start"
            color="inherit"
            // value={this.state.SearchTitle}
            onClick={() => dispatch(sideNavStatus())}
            aria-label="menu"
          >
            <DehazeIcon />
          </IconButton>
        </div>
        <div className="Header-Text font-family">TRAVEL &nbsp;AGENCY</div>
        <div className="Header-Text-DashBoard font-family">DASHBOARD</div>
        <div className="Log-out-Button">
          <Button variant="outlined" color="secondary">
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
