import React from "react";
import "./Body.scss";
import ShowBuyPackages from "./ShowBuyPackages/ShowBuyPackages";
import Feedback from "./Feedback/Feedback";
import AddDetail from "./../AddDetail/AddDetail";
import ShowPackages from "./Showpackages/ShowPackages";
import PackageDetail from "./PackageDetail/PackageDetail";
import { useSelector } from "react-redux";
// import userService from "../../../../Services/UserServices";

// const User_service = new userService();

function Body() {
  const PackageButtonOn = useSelector((state) => state.PackageButtonOn);
  // const CustomerButtonOn = useSelector((state) => state.CustomerButtonOn);
  const FeedbackButtonOn = useSelector((state) => state.FeedbackButtonOn);
  const AddDetailButtonOn = useSelector((state) => state.AddDetailButtonOn);
  const PackageDetailButton = useSelector((state) => state.PackageDetailButton);
  const ShowCustomerBuyPackages = useSelector(
    (state) => state.ShowCustomerBuyPackages
  );
  console.log(ShowCustomerBuyPackages);
  // console.log(CustomerButtonOn);
  // console.log(FeedbackButtonOn);

  return (
    <div className="body-Container">
      <div className="sub-Container">
        {PackageButtonOn ? (
          <div className="package-Button-On">
            <ShowPackages />
          </div>
        ) : ShowCustomerBuyPackages ? (
          <div className="ShowCustomerBuyPackages-Button-On">
            <ShowBuyPackages />
          </div>
        ) : FeedbackButtonOn ? (
          <div className="feedback-Button-On">
            <Feedback />
          </div>
        ) : AddDetailButtonOn ? (
          <div className="add-Customer-Detail">
            <AddDetail />
          </div>
        ) : PackageDetailButton ? (
          <div className="Open-Package-Detail">
            <PackageDetail />
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
