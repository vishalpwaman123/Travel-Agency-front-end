import React from "react";
import "./Feedback.scss";
import feedbacklogo from "../../../../../Asserts/Feedback.png";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FeedbackIcon from "@material-ui/icons/Feedback";

function Feedback() {
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
              multiline
              rows={4}
              placeholder="How Was Our services."
              variant="outlined"
              className="feedback-Input"
            />
          </div>
          <div className="package-Details-button">
            <Button
              variant="contained"
              color="secondary"
              className="feedback-Button"
              startIcon={<FeedbackIcon />}
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
