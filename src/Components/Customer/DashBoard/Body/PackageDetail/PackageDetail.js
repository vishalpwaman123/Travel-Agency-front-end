import React from "react";
import "./PackageDetail.scss";
import { useSelector, useDispatch } from "react-redux";
import { CustomerBuyPackageButton } from "../../../../../Redux";
import User_service from "../../../../../Services/UserServices";
import Button from "@material-ui/core/Button";

function PackageDetail() {
  const userServices = new User_service();
  const dispatch = useDispatch();
  const PackagePassData = useSelector((state) => state.PackagePassData);
  const getPassUserDetail = useSelector((state) => state.getPassUserDetail);

  console.log(PackagePassData);
  console.log(getPassUserDetail);

  const submitBuyButton = () => {
    const user = {
      user_id: getPassUserDetail.user_id,
      email: getPassUserDetail.email,
      mainImage: PackagePassData.package_Image1,
      package_Destination: PackagePassData.package_Destination,
    };

    userServices
      .AddBuyUserPackages(user)
      .then((data) => {
        console.log(data.data);
        dispatch(CustomerBuyPackageButton(getPassUserDetail));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(PackagePassData);
  return (
    <div className="packageDetail-Container">
      <div className="sub-Container">
        <div className="package-Images">
          <div className="main-Image">
            <div className="image1">
              <img
                src={PackagePassData.package_Image1}
                alt=""
                className="image11"
              />
            </div>
          </div>
          <div className="sub-Images">
            <div className="image2">
              <img
                src={PackagePassData.package_Image2}
                alt=""
                className="image22"
              />
            </div>
            <div className="image3">
              <img
                src={PackagePassData.package_Image3}
                alt=""
                className="image33"
              />
            </div>
            <div className="image4">
              <img
                src={PackagePassData.package_Image4}
                alt=""
                className="image44"
              />
            </div>
          </div>
        </div>
        <div className="package-Details">
          <div className="package_Destination">
            <div className="Text">Destination :</div>
            <div className="Output">{PackagePassData.package_Destination}</div>
          </div>
          <div className="package_Discription">
            <div className="Text">Desctiption : </div>
            <div className="Output">{PackagePassData.package_Discription}</div>
          </div>
          <div className="package_Price">
            <div className="Text">Price :</div>
            <div className="Output">
              {PackagePassData.package_Price} Rs. Only
            </div>
          </div>
          <div className="Buy-Button">
            {/* <div className="Text"></div> */}
            {/* <div className="Output"></div> */}
            <Button
              variant="contained"
              color="secondary"
              onClick={submitBuyButton}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetail;
