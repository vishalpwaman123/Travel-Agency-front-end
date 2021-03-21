import React from "react";
import "./Body.scss";
import Table from "./table/Table";
import Feedback from "./Feedback/Feedback";
import AddDetail from "./../AddDetail/AddDetail";
import { useSelector, useDispatch } from "react-redux";

function Body() {
  const PackageButtonOn = useSelector((state) => state.PackageButtonOn);
  const CustomerButtonOn = useSelector((state) => state.CustomerButtonOn);
  const FeedbackButtonOn = useSelector((state) => state.FeedbackButtonOn);
  const AddDetailButtonOn = useSelector((state) => state.AddDetailButtonOn);
  console.log(PackageButtonOn);
  console.log(CustomerButtonOn);
  console.log(FeedbackButtonOn);
  return (
    <div className="body-Container">
      <div className="sub-Container">
        {PackageButtonOn ? (
          <div className="package-Button-On">
            <div className="display-Packages-Menu">
              <div className="show-All-Packages font-family">
                Show All Packages
              </div>
            </div>
            <div className="display-Packages-Menu">
              <div className="show-All-Packages font-family">
                Add New Packages
              </div>
            </div>
          </div>
        ) : CustomerButtonOn ? (
          <div className="customer-Button-On">
            <Table />
          </div>
        ) : FeedbackButtonOn ? (
          <div className="feedback-Button-On">
            <Feedback />
          </div>
        ) : AddDetailButtonOn ? (
          <div className="add-Customer-Detail">
            <AddDetail />
          </div>
        ) : (
          <div className="default">
            <h1>Welcome To Vishal Travelling Agency</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Body;
