import AxiosServices from "./AxiosServices";
const config = require("../Configuration/Config");

const axiosServices = new AxiosServices();

export class UserServices {
  SignUp(data) {
    let url = config.SignUp;
    return axiosServices.post(url, data, false);
  }

  SignIn(data) {
    let url = config.SignIn;
    return axiosServices.post(url, data, false);
  }

  GetAllPackeges(data) {
    let url = config.GetAllPackeges;
    return axiosServices.get(url, false);
  }
}

export default UserServices;
