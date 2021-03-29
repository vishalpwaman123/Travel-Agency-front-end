import React from "react";
import "./CustomerChoice.css";
import { useDispatch } from "react-redux";
import {
  showAllCustomerButton,
  BuyPackageCustomerListButton,
} from "../../../../../Redux";

function CustomerChoice() {
  const dispatch = useDispatch();

  return (
    <div className="customerChoice-Container">
      <div className="sub-Container">
        <div
          className="customer-Type"
          onClick={() => dispatch(showAllCustomerButton())}
        >
          <div className="Text">All Register Customer</div>
        </div>
        <div
          className="customer-Type"
          onClick={() => dispatch(BuyPackageCustomerListButton())}
        >
          <div className="Text">Buy packages Customers</div>
        </div>
      </div>
    </div>
  );
}

export default CustomerChoice;
