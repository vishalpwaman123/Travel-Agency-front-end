import React, { useEffect, useState } from "react";
import "./ByPackageCustomers.css";
import UserServices from "../../../../../Services/UserServices";

const userServices = new UserServices();

function ByPackageCustomers() {
  const [getAllBuyPackageData, setgetAllBuyPackageData] = useState([]);
  const [flag, setflag] = useState(false);
  useEffect(() => {
    userServices
      .GetAllUserByPackages()
      .then((data) => {
        console.log(data.data.data);
        console.log(data.status);
        if (data.status === 200) {
          console.log("true");
          setflag(true);
          setgetAllBuyPackageData(data.data.data);
        } else {
          console.log("false");
          setflag(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = getAllBuyPackageData.map((note) => (
    <div className="detail">
      <div className="image">
        <img src={note.mainImage} alt="" className="image" />
      </div>
      <div className="user-id">User id : {note.user_id}</div>
      <div className="email">Email Id : {note.email}</div>
      <div className="destination">Destination : {note.package_Destination}</div>
      <div className="buy-date">Buy Date : {note.created_Date}</div>
    </div>
  ));
  return (
    <div className="ByPackageCustomers">
      <div className="sub-Container">
        {flag ? (
          <div className="data-Loop">{data}</div>
        ) : (
          <div className="empty-Message">
            <h1>NO One Buy Any Package</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ByPackageCustomers;
