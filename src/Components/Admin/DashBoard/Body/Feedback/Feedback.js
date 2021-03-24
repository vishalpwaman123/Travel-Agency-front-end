import React, {useState , useEffect} from "react";
import "./Feedback";
import userService from "../../../../../Services/UserServices"

const user_Services = new userService();
function Feedback() {

  useEffect(() => {
    user_Services.
    
  }, [])

  return (
    <div className="feedback-Container">
      <div className="sub-Container">

      </div>
    </div>
  );
}

export default Feedback;
