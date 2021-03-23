import React from "react";
import "./PackageDetail.scss";
import { useSelector, useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";

function PackageDetail() {
  const PackagePassData = useSelector((state) => state.PackagePassData);
  console.log(PackagePassData);
  return (
    <div className="packageDetail-Container">
      <div className="sub-Container">
        <div className="package-Images">
          <div className="main-Image">
            <div className="image1">
              <img src={PackagePassData.package_Image1} className="image11" />
            </div>
          </div>
          <div className="sub-Images">
            <div className="image2">
              <img src={PackagePassData.package_Image2} className="image22" />
            </div>
            <div className="image3">
              <img src={PackagePassData.package_Image3} className="image33" />
            </div>
            <div className="image4">
              <img src={PackagePassData.package_Image4} className="image44" />
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
            <div className="Output">{PackagePassData.package_Price}</div>
          </div>
          <div className="Buy-Button">
            {/* <div className="Text"></div> */}
            {/* <div className="Output"></div> */}
            <Button variant="contained" color="secondary">
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetail;
