import React, { useState, useEffect } from "react";
import "./Feedback.css";
import userService from "../../../../../Services/UserServices";

const user_Services = new userService();
function Feedback() {
  const [allFeedback, setAllFeedback] = useState([]);

  useEffect(() => {
    user_Services
      .GetAllFeedBack()
      .then((data) => {
        console.log(data);
        setAllFeedback(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const feedback = allFeedback.map((note) => (
    <div className="feedback">
      <div className="name">{note.Customer_Name}</div>
      <div className="email">{note.Customer_Email}</div>
      <div className="feedbackdata">{note.FeedBack}</div>
    </div>
  ));

  console.log(allFeedback);
  return (
    <div className="feedback-Container">
      <div className="sub-Container">{feedback}</div>
    </div>
  );
}

export default Feedback;
