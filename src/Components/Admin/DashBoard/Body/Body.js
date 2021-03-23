import React from "react";
import "./Body.scss";
import Table from "./table/Table";
import Feedback from "./Feedback/Feedback";
import { useSelector, useDispatch } from "react-redux";
import {
  showAllPackagesButtonOn,
  addNewPackageButtonOn,
} from "../../../../Redux";

function Body() {
  const dispatch = useDispatch();
  const PackageButtonOn = useSelector((state) => state.PackageButtonOn);
  const CustomerButtonOn = useSelector((state) => state.CustomerButtonOn);
  const FeedbackButtonOn = useSelector((state) => state.FeedbackButtonOn);
  const AddNewPackageButton = useSelector((state) => state.AddNewPackageButton);
  const ShowAllPackagesButtonOn = useSelector(
    (state) => state.ShowAllPackagesButtonOn
  );
  console.log(PackageButtonOn);
  console.log(CustomerButtonOn);
  console.log(FeedbackButtonOn);
  return (
    <div className="body-Container">
      <div className="sub-Container">
        {PackageButtonOn ? (
          <div className="package-Button-On">
            <div className="display-Packages-Menu">
              <div
                className="show-All-Packages font-family"
                onClick={() => dispatch(showAllPackagesButtonOn())}
              >
                Show All Packages
              </div>
            </div>
            <div className="display-Packages-Menu">
              <div
                className="show-All-Packages font-family"
                onClick={() => dispatch(addNewPackageButtonOn())}
              >
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
        ) : ShowAllPackagesButtonOn ? (
          <div className="Show-All-Packages"></div>
        ) : AddNewPackageButton ? (
          <div className="add-New-Packages"></div>
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
