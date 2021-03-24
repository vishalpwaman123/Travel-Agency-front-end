import React, { useState } from "react";
import "./Feedback.scss";
import feedbacklogo from "../../../../../Asserts/Feedback.png";
import userService from "../../../../../Services/UserServices";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FeedbackIcon from "@material-ui/icons/Feedback";

const User_service = new userService();
function Feedback() {
    const getPassUserDetail = useSelector((state) => state.getPassUserDetail);
  const [feedback, setfeedback] = useState(null);
  const SubmitFeedback = (event) => {
    const { value, name } = event.target;
    if (value == null) {
      console.log("Feedback Not Submitted Bcz Empty.");
    } else {
      console.log("Feedback Not Emplty");
      const user = {
        Customer_Name: getPassUserDetail.userName,
        Customer_Email: getPassUserDetail.email,
        FeedBack: value,
      };
      console.log(user);
      User_service.SubmitFeedback(user)
        .then((data) => {
          console.log(data);
          console.log("Feedback Submitted");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="customer-Feedback-Container">
      <div className="sub-Container">
        <div className="package-Images">
          <img src={feedbacklogo} className="feedback-Logo" />
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
