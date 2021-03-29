import React, { useState } from "react";
import "./AddDetail.css";
import personLogo from "../../../../Asserts/Add-Person-Detail.png";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import userService from "../../../../Services/UserServices";
const User_service = new userService();

function AddDetail() {
  const getPassUserDetail = useSelector((state) => state.getPassUserDetail);
  const [email, setemail] = useState(getPassUserDetail.email);
  const [userName, setuserName] = useState(getPassUserDetail.userName);
  const [occupation, setoccupation] = useState(getPassUserDetail.occupation);
  const [mobileNumber, setmobileNumber] = useState(
    getPassUserDetail.mobileNumber
  );
  const [age, setage] = useState(getPassUserDetail.age);
  const [gender, setgender] = useState(getPassUserDetail.gender);
  const [qualification, setqualification] = useState(
    getPassUserDetail.qualification
  );
  const [address, setaddress] = useState(getPassUserDetail.address);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      user_id: getPassUserDetail.user_id,
      email: email,
      userName: userName,
      occupation: occupation,
      mobileNumber: mobileNumber,
      age: age,
      gender: gender,
      qualification: qualification,
      address: address,
    };

    console.log("Calling Api");
    User_service.addUserDetail(user)
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    switch (name) {
      case "email":
        setemail(value);
        // console.log(email);
        break;
      case "userName":
        setuserName(value);
        // console.log(userName);
        break;
      case "occupation":
        setoccupation(value);
        // console.log(occupation);
        break;
      case "mobileNumber":
        setmobileNumber(value);
        // console.log(mobileNumber);
        break;
      case "age":
        setage(value);
        // console.log(age);
        break;
      case "gender":
        setgender(value);
        // console.log(gender);
        break;
      case "address":
        setaddress(value);
        // console.log(address);
        break;
      case "qualification":
        setqualification(value);
        // console.log(address);
        break;
      default:
        break;
    }
  };
  console.log(
    email,
    userName,
    occupation,
    mobileNumber,
    age,
    gender,
    address,
    qualification
  );
  // console.log(getPassUserDetail);

  return (
    <div className="adddetail-Container">
      <div className="sub-Container">
        <div className="detail-Image">
          <img src={personLogo} alt="" className="Add-detail" />
          <div className="image-Text">Add Personal Detail</div>
        </div>
        <div className="operations">
          <div className="detail-All-Input">
            <div className="detail-Box">
              <div className="detail-Box-Text">Email ID : </div>
              <div className="detail-Box-Input">
                <TextField
                  fullWidth
                  autoComplete="off"
                  className="InputField"
                  type="email"
                  name="email"
                  placeholder="eg. Vishal@gmail.com"
                  //   label="Username"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  required
                  text-align="right"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="detail-Box">
              <div className="detail-Box-Text">User Name : </div>
              <div className="detail-Box-Input">
                <TextField
                  fullWidth
                  autoComplete="off"
                  className="InputField"
                  type="text"
                  name="userName"
                  placeholder="eg. Vishal"
                  //   label="Username"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  required
                  text-align="right"
                  value={userName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="detail-Box">
              <div className="detail-Box-Text">Mobile Number :</div>
              <div className="detail-Box-Input">
                <TextField
                  fullWidth
                  autoComplete="off"
                  className="InputField"
                  type="number"
                  name="mobileNumber"
                  placeholder="eg. 7758039722"
                  //   label="Username"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  required
                  text-align="right"
                  value={mobileNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="detail-Box">
              <div className="detail-Box-Text">Age :</div>
              <div className="detail-Box-Input">
                <TextField
                  fullWidth
                  autoComplete="off"
                  className="InputField"
                  type="number"
                  placeholder="eg. 23"
                  name="age"
                  //   label="Username"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  required
                  text-align="right"
                  value={age}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="detail-Box">
              <div className="detail-Box-Text">Gender :</div>
              <div className="detail-Box-Input">
                <TextField
                  fullWidth
                  autoComplete="off"
                  className="InputField"
                  type="text"
                  name="gender"
                  placeholder="eg. Male"
                  //   label="Username"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  required
                  text-align="right"
                  value={gender}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="detail-Box">
              <div className="detail-Box-Text">Qualification :</div>
              <div className="detail-Box-Input">
                <TextField
                  fullWidth
                  autoComplete="off"
                  className="InputField"
                  type="text"
                  name="qualification"
                  placeholder="eg. BE Computer"
                  //   label="Username"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  required
                  text-align="right"
                  value={qualification}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="detail-Box">
              <div className="detail-Box-Text">Address :</div>
              <div className="detail-Box-Input">
                <TextField
                  fullWidth
                  autoComplete="off"
                  className="InputField"
                  type="text"
                  name="address"
                  placeholder="eg. Pune, Maharashtra"
                  //   label="Username"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  required
                  text-align="right"
                  value={address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="detail-Box">
              <div className="detail-Box-Text">Occupation :</div>
              <div className="detail-Box-Input">
                <TextField
                  fullWidth
                  autoComplete="off"
                  className="InputField"
                  type="text"
                  name="occupation"
                  placeholder="eg. Software Engineer"
                  //   label="Username"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  required
                  text-align="right"
                  value={occupation}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="submit-Button">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDetail;
