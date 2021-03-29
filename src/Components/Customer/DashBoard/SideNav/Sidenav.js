import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Sidenav.css";
import {
  packageButtonOn,
  feedbackButtonOn,
  adddetailButtonOn,
  CustomerBuyPackageButton,
} from "../../../../Redux";
import { useLocation } from "react-router-dom";
import userService from "../../../../Services/UserServices";

import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import IconButton from "@material-ui/core/IconButton";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FeedbackIcon from "@material-ui/icons/Feedback";
import PersonIcon from "@material-ui/icons/Person";

function Sidenav() {
  const location = useLocation();
  const dispatch = useDispatch();
  const User_service = new userService();
  const [getUserDetail, setGetUserDetail] = useState([]);
  const MenuStatus = useSelector((state) => state.MenuStatus);

  useEffect(() => {
    console.log(location.pathname); // result: '/secondpage'
    console.log(location.search); // result: '?query=abc'
    console.log(location.state.detail); // result: 'some_value'
    const user = {
      user_id: location.state.detail,
    };
    User_service.GetUserDetailById(user)
      .then((data) => {
        console.log(data.data.data[0]);
        setGetUserDetail(data.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(getUserDetail);
  return (
    <div className="sidenav-Container">
      <div className="sub-Container">
        <div className={MenuStatus ? "Option2" : "Option1"}>
          {!MenuStatus ? (
            <IconButton
              edge="start"
              color="inherit"
              className="OptionIcon"
              onClick={() => dispatch(adddetailButtonOn(getUserDetail))}
              aria-label="menu"
            >
              <PersonIcon />
            </IconButton>
          ) : (
            <div
              class="Menu-withText"
              onClick={() => dispatch(adddetailButtonOn(getUserDetail))}
            >
              <IconButton
                edge="start"
                color="inherit"
                className="OptionIcon"
                // onClick={() => dispatch(adddetailButtonOn(getUserDetail))}
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
              onClick={() => dispatch(packageButtonOn(getUserDetail))}
              aria-label="menu"
            >
              <FlightTakeoffIcon />
            </IconButton>
          ) : (
            <div
              class="Menu-withText"
              onClick={() => dispatch(packageButtonOn(getUserDetail))}
            >
              <IconButton
                edge="start"
                color="inherit"
                className="OptionIcon"
                // onClick={() => dispatch(packageButtonOn(getUserDetail))}
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
              onClick={() => dispatch(CustomerBuyPackageButton(getUserDetail))}
              aria-label="menu"
            >
              <EmojiPeopleIcon />
            </IconButton>
          ) : (
            <div
              class="Menu-withText"
              onClick={() => dispatch(CustomerBuyPackageButton(getUserDetail))}
            >
              <IconButton
                edge="start"
                color="inherit"
                className="OptionIcon"
                // onClick={() =>
                //   dispatch(CustomerBuyPackageButton(getUserDetail))
                // }
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
              onClick={() => dispatch(feedbackButtonOn(getUserDetail))}
              aria-label="menu"
            >
              <FeedbackIcon />
            </IconButton>
          ) : (
            <div
              class="Menu-withText"
              onClick={() => dispatch(feedbackButtonOn(getUserDetail))}
            >
              <IconButton
                edge="start"
                color="inherit"
                className="OptionIcon"
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
