import React, { useState } from "react";
import "./Feedback.css";
import feedbacklogo from "../../../../../Asserts/Feedback.png";
import userService from "../../../../../Services/UserServices";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { packageButtonOn } from "../../../../../Redux";

const User_service = new userService();
function Feedback() {
  const dispatch = useDispatch();
  const getPassUserDetail = useSelector((state) => state.getPassUserDetail);
  const getUserDetail = useSelector((state) => state.getUserDetail);
  const [feedback, setfeedback] = useState(null);
  const SubmitFeedback = () => {
    console.log(feedback);
    if (feedback == null) {
      console.log("Feedback Not Submitted Bcz Empty.");
    } else {
      console.log("Feedback Not Emplty");
      const user = {
        Customer_Name: getPassUserDetail.userName,
        Customer_Email: getPassUserDetail.email,
        FeedBack: feedback,
      };
      console.log(user);
      User_service.SubmitFeedback(user)
        .then((data) => {
          console.log(data);
          console.log("Feedback Submitted");
          dispatch(packageButtonOn(getUserDetail));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChanges = (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);
    if (value != null) {
      setfeedback(value);
    }
  };
  return (
    <div className="customer-Feedback-Container">
      <div className="sub-Container">
        <div className="package-Images">
          <img src={feedbacklogo} alt="" className="feedback-Logo" />
        </div>
        <div className="package-Details">
          <div className="package-Details-Text">
            <TextField
              id="outlined-multiline-static"
              label="Feedback"
              name="feedback"
              multiline
              rows={4}
              placeholder="How Was Our services."
              variant="outlined"
              className="feedback-Input"
              valie={feedback}
              onChange={handleChanges}
            />
          </div>
          <div className="package-Details-button">
            <Button
              variant="contained"
              color="secondary"
              className="feedback-Button"
              startIcon={<FeedbackIcon />}
              onClick={SubmitFeedback}
            >
              Feedback
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
