import React, { useEffect, useState } from "react";
import "./ShowBuyPackages.css";
import User_service from "../../../../../Services/UserServices";
import { useSelector } from "react-redux";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const userServices = new User_service();

function ShowBuyPackages() {
  const [buypackageList, setbuypackageList] = useState([]);
  const [flag, setflag] = useState([]);
  const getPassUserDetail = useSelector((state) => state.getPassUserDetail);
  const user = {
    user_id: getPassUserDetail.user_id,
  };
  useEffect(() => {
    userServices
      .GetUserBuyPackages(user)
      .then((data) => {
        console.log(data);
        console.log(data.status);
        if (data.status === 200) {
          console.log("Found Packages");
          setbuypackageList(data.data.data);
          setflag(true);
        } else {
          console.log("Not Found Packages");
          setflag(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setflag(false);
      });
  }, []);

  const packages = buypackageList.map((note) => (
    <div className="Package">
      <Card>
        <CardActionArea>
          <CardMedia image={note.mainImage} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {note.package_Destination}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {note.package_Discription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button
           variant="outlined"
           size="small"
           color="primary"
           onClick={() => dispatch(packageDetailButtonOn(note))}
         > */}
          {/* More Detail
         </Button> */}
        </CardActions>
      </Card>
    </div>
  ));
  console.log();
  return (
    <div className="ShowBuyPackages-Body">
      <div className="sub-Container">
        {flag ? (
          <div className="Found"> {packages}</div>
        ) : (
          <div className="not-Found">
            <h1>You Not Buy Any Package</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowBuyPackages;
