import React from "react";
import "./AddDetail.scss";
import personLogo from "../../../../Asserts/Add-Person-Detail.png";

import TextField from "@material-ui/core/TextField";

function AddDetail() {
  return (
    <div className="adddetail-Container">
      <div className="sub-Container">
        <div className="detail-Image">
                  <img src={personLogo} className="Add-detail" />
                  <div className="image-Text">Add Personal Detail</div>
        </div>
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
                //   value={this.state.email}
                //   onChange={this.handleChange}
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
                name="email"
                placeholder="eg. Vishal"
                //   label="Username"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                required
                text-align="right"
                //   value={this.state.email}
                //   onChange={this.handleChange}
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
                name="email"
                placeholder="eg. 7758039722"
                //   label="Username"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                required
                text-align="right"
                //   value={this.state.email}
                //   onChange={this.handleChange}
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
                name="email"
                //   label="Username"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                required
                text-align="right"
                //   value={this.state.email}
                //   onChange={this.handleChange}
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
                name="email"
                placeholder="eg. Male"
                //   label="Username"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                required
                text-align="right"
                //   value={this.state.email}
                //   onChange={this.handleChange}
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
                name="email"
                placeholder="eg. BE Computer"
                //   label="Username"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                required
                text-align="right"
                //   value={this.state.email}
                //   onChange={this.handleChange}
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
                name="email"
                placeholder="eg. Pune, Maharashtra"
                //   label="Username"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                required
                text-align="right"
                //   value={this.state.email}
                //   onChange={this.handleChange}
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
                type="email"
                name="email"
                placeholder="eg. Software Engineer"
                //   label="Username"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                required
                text-align="right"
                //   value={this.state.email}
                //   onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDetail;
