import React, { useState } from "react";
import "./AddNewPackage.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import User_service from "../../../../../Services/UserServices";
import logo from "../../../../../Asserts/ImageNotFound.png";

function AddNewPackage() {
  const userServices = new User_service();
  const [constImage, setconstImage] = useState(logo);
  const [imageInput1, setimageInput1] = useState(logo);
  const [imageInput2, setimageInput2] = useState(logo);
  const [imageInput3, setimageInput3] = useState(logo);
  const [imageInput4, setimageInput4] = useState(logo);
  const [destination_Name, setdestination_Name] = useState(null);
  const [destination_Decription, setdestination_Decription] = useState(null);
  const [price, setprice] = useState(0);
  const [detailFlag, setdetailFlag] = useState(true);

  const imageHandler = (event) => {
    const { name } = event.target;
    console.log(name);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        if (name == "imageInput1") {
          setimageInput1(reader.result);
          console.log("image input 1");
        } else if (name == "imageInput2") {
          setimageInput2(reader.result);
          console.log("image input 2");
        } else if (name == "imageInput3") {
          setimageInput3(reader.result);
          console.log("image input 3");
        } else if (name == "imageInput4") {
          setimageInput4(reader.result);
          console.log("image input 4");
        }
        // console.log(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "destinationName":
        setdestination_Name(value);
        break;
      case "destinationDecription":
        setdestination_Decription(value);
        break;
      case "price":
        setprice(value);
        break;
      default:
        break;
    }
    console.log(name);
    console.log(value);
  };

  const handleSubmit = (event) => {
    if (destination_Name == null) {
      setdetailFlag(false);
    } else if (destination_Decription == null) {
      setdetailFlag(false);
    } else if (price == null) {
      setdetailFlag(false);
    }

    // if (imageInput1 != constImage && detailFlag == true) {
    //   const user = {
    //     package_Image1: imageInput1,
    //     type: "imageInput1",
    //   };
    //   userServices
    //     .AddPackageImage(user)
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // if (imageInput2 != constImage && detailFlag == true) {
    //   const user = {
    //     package_Image2: imageInput2,
    //     type: "imageInput2",
    //   };
    //   userServices
    //     .AddPackageImage(user)
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // if (imageInput3 != constImage && detailFlag == true) {
    //   const user = {
    //     package_Image3: imageInput3,
    //     type: "imageInput3",
    //   };
    //   userServices
    //     .AddPackageImage(user)
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // if (imageInput4 != constImage && detailFlag == true) {
    //   const user = {
    //     package_Image4: imageInput4,
    //     type: "imageInput4",
    //   };
    //   userServices
    //     .AddPackageImage(user)
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    if (detailFlag == true) {
      const user = {
        package_Image1: imageInput1,
        package_Image2: imageInput2,
        package_Image3: imageInput3,
        package_Image4: imageInput4,
        package_Destination: destination_Name,
        package_Discription: destination_Decription,
        package_Price: price,
      };
      console.log(user);
      userServices
        .AddNewPackagesDetail(user)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Invalid Form");
    }

    if (detailFlag == false) {
      console.log("Invalid Form");
    } else {
    }
  };
  return (
    <div className="AddNewPackage-Container">
      <div className="sub-Container">
        <div className="image-Contain">
          <div className="image1">
            <div className="display">
              <img src={imageInput1} className="img1" />
            </div>
            <input
              type="file"
              name="imageInput1"
              accept="image/*"
              className="imageInput1"
              onChange={imageHandler}
            />
          </div>
          <div className="sub-images">
            <div className="image2">
              <div className="display">
                <img src={imageInput2} className="img1" />
              </div>
              <input
                type="file"
                name="imageInput2"
                accept="image/*"
                className="imageInput2"
                onChange={imageHandler}
              />
            </div>
            <div className="image3">
              <div className="display">
                <img src={imageInput3} className="img1" />
              </div>
              <input
                type="file"
                name="imageInput3"
                accept="image/*"
                className="imageInput3"
                onChange={imageHandler}
              />
            </div>
            <div className="image4">
              <div className="display">
                <img src={imageInput4} className="img1" />
              </div>
              <input
                type="file"
                name="imageInput4"
                accept="image/*"
                className="imageInput4"
                onChange={imageHandler}
              />
            </div>
          </div>
        </div>
        <div className="package-detail">
          <div className="header">Package Detail</div>
          <div className="package-Name">
            <div className="Text">Package Name :</div>
            <div className="Input">
              <TextField
                fullWidth
                autoComplete="off"
                className="InputField"
                type="text"
                name="destinationName"
                label="Package Name"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                required
                text-align="right"
                value={destination_Name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="package-description">
            <div className="Text">Package Description :</div>
            <div className="Input">
              <TextField
                // fullWidth
                autoComplete="off"
                className="InputField"
                type="text"
                name="destinationDecription"
                label="Description"
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                variant="outlined"
                value={destination_Decription}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="package-price">
            <div className="Text">Price :</div>
            <div className="Input">
              <TextField
                fullWidth
                autoComplete="off"
                className="InputField"
                type="number"
                name="price"
                label="Price"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                required
                text-align="right"
                value={price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="add-Button">
            <Button variant="outlined" color="primary" onClick={handleSubmit}>
              Add Package
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewPackage;
