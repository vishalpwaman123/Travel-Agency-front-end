import React, { useState, useEffect } from "react";
import "./ShowPackages.scss";
import userService from "../../../../../Services/UserServices";
import { packageDetailButtonOn } from "../../../../../Redux/";
import { useSelector, useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const User_service = new userService();
function ShowPackages() {
  const dispatch = useDispatch();
  const [getPackages, setgetPackages] = useState([]);

  const Assignfunction = (data) => {
    console.log(data);
    setgetPackages(data);
    console.log(getPackages);
  };

  useEffect(() => {
    User_service.GetAllPackeges()
      .then((data) => {
        // console.log(data.data.data);
        console.log(data.data.data);
        Assignfunction(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Packages = getPackages.map((note) => (
    <div className="Package">
      <Card>
        <CardActionArea>
          <CardMedia image={note.package_Image1} />
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
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => dispatch(packageDetailButtonOn(note))}
          >
            More Detail
          </Button>
        </CardActions>
      </Card>
    </div>
  ));

  console.log(getPackages);

  return (
    <div className="showPackages-Container">
      <div className="sub-Container">
        <div className="Package-display">{Packages}</div>
      </div>
    </div>
  );
}

export default ShowPackages;
