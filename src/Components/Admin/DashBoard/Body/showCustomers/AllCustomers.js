import React, { useEffect, useState } from "react";
import "./AllCustomers.scss";
import User_Services from "../../../../../Services/UserServices";

const user_Services = new User_Services();
function AllCustomers() {
  const [getAllUser, setgetAllUser] = useState([]);

  const Assignfunction = (data) => {
    console.log(data);
    setgetAllUser(data);
    console.log(getAllUser);
  };

  useEffect(() => {
    user_Services
      .GetAllCustomers()
      .then((data) => {
        console.log(data.data.data);
        Assignfunction(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(getAllUser);
  const tabledata = getAllUser.map((note) => (
    // <div>
    <tr className="maptr">
      <td className="data">{note.userName}</td>
      <td className="data">{note.email}</td>
      <td className="data">{note.mobileNumber}</td>
      <td className="data">{note.occupation}</td>
      <td className="data">{note.age}</td>
      <td className="data">{note.gender}</td>
      <td className="data">{note.qualification}</td>
      <td className="data">{note.address}</td>
      <td className="data">{note.created_Date}</td>
    </tr>
    // </div>
  ));

  console.log(tabledata);

  return (
    <div className="allCustomers-Container">
      <div className="sub-Container">
        <table class="table">
          <tr>
            <th className="header">UserName</th>
            <th className="header">Email Id</th>
            <th className="header">Mobile No.</th>
            <th className="header">Occupation</th>
            <th className="header">Age</th>
            <th className="header">Gender</th>
            <th className="header">Qualification</th>
            <th className="header">Address</th>
            <th className="header">Acc. created_Date</th>
          </tr>
          {tabledata}
        </table>
      </div>
    </div>
  );
}

export default AllCustomers;
