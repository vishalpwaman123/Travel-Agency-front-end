import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Sidenav.scss";
import {
  sideNavStatus,
  packageButtonOn,
  customerButtonOn,
  feedbackButtonOn,
  adddetailButtonOn,
} from "../../../../Redux";

import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import IconButton from "@material-ui/core/IconButton";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FeedbackIcon from "@material-ui/icons/Feedback";
import PersonIcon from "@material-ui/icons/Person";

function Sidenav() {
  const dispatch = useDispatch();
  const MenuStatus = useSelector((state) => state.MenuStatus);
  return (
    <div className="sidenav-Container">
      <div className="sub-Container">
        <div className={MenuStatus ? "Option2" : "Option1"}>
          {!MenuStatus ? (
            <IconButton
              edge="start"
              color="inherit"
              className="OptionIcon"
              onClick={() => dispatch(adddetailButtonOn())}
              aria-label="menu"
            >
              <PersonIcon />
            </IconButton>
          ) : (
            <div class="Menu-withText">
              <IconButton
                edge="start"
                color="inherit"
                className="OptionIcon"
                onClick={() => dispatch(adddetailButtonOn())}
                aria-label="menu"
              >
                <PersonIcon />
              </IconButton>
              <div className="Icon-Text font-family">Add Customer Detail</div>
            </div>
          )}
        </div>
        <div className={MenuStatus ? "Option2" : "Option1"}>
          {!MenuStatus ? (
            <IconButton
              edge="start"
              color="inherit"
              className="OptionIcon"
              onClick={() => dispatch(packageButtonOn())}
              aria-label="menu"
            >
              <FlightTakeoffIcon />
            </IconButton>
          ) : (
            <div class="Menu-withText">
              <IconButton
                edge="start"
                color="inherit"
                className="OptionIcon"
                onClick={() => dispatch(packageButtonOn())}
                aria-label="menu"
              >
                <FlightTakeoffIcon />
              </IconButton>
              <div className="Icon-Text font-family">All Packages</div>
            </div>
          )}
        </div>
        <div className={MenuStatus ? "Option2" : "Option1"}>
          {!MenuStatus ? (
            <IconButton
              edge="start"
              color="inherit"
              className="OptionIcon"
              onClick={() => dispatch(customerButtonOn())}
              aria-label="menu"
            >
              <EmojiPeopleIcon />
            </IconButton>
          ) : (
            <div class="Menu-withText">
              <IconButton
                edge="start"
                color="inherit"
                className="OptionIcon"
                onClick={() => dispatch(customerButtonOn())}
                aria-label="menu"
              >
                <EmojiPeopleIcon />
              </IconButton>
              <div className="Icon-Text font-family">My Packages</div>
            </div>
          )}
        </div>
        <div className={MenuStatus ? "Option2" : "Option1"}>
          {!MenuStatus ? (
            <IconButton
              edge="start"
              color="inherit"
              className="OptionIcon"
              onClick={() => dispatch(feedbackButtonOn())}
              aria-label="menu"
            >
              <FeedbackIcon />
            </IconButton>
          ) : (
            <div class="Menu-withText">
              <IconButton
                edge="start"
                color="inherit"
                className="OptionIcon"
                onClick={() => dispatch(feedbackButtonOn())}
                aria-label="menu"
              >
                <FeedbackIcon />
              </IconButton>
              <div className="Icon-Text font-family">Feedback</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidenav;