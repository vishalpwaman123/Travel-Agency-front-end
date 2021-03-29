import React from "react";
import { useDispatch } from "react-redux";
import "./header.css";
import { sideNavStatus } from "../../../../Redux";
import { useHistory } from "react-router";

import IconButton from "@material-ui/core/IconButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Button from "@material-ui/core/Button";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    history.push({
      pathname: "/signIn",
    });
  };

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
          <Button variant="outlined" color="secondary" onClick={handleLogOut}>
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
