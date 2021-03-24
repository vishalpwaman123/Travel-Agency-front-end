import React from "react";
import "./CustomerChoice.scss";
import { useSelector, useDispatch } from "react-redux";
import { showAllCustomerButton } from "../../../../../Redux";

function CustomerChoice() {
  const dispatch = useDispatch();

  return (
    <div className="customerChoice-Container">
      <div className="sub-Container">
        <div
          className="customer-Type"
          onClick={() => dispatch(showAllCustomerButton())}
        >
          All Register Customer
        </div>
        <div
          className="customer-Type"
          onClick={() => dispatch(showAllCustomerButton())}
        >
          Buy packages Customers
        </div>
      </div>
    </div>
  );
}

export default CustomerChoice;
