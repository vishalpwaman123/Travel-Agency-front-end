import AxiosServices from "./AxiosServices";
const config = require("../Configuration/Config");

const axiosServices = new AxiosServices();

export class UserServices {
  SignUp(data) {
    let url = config.SignUp;
    return axiosServices.post(url, data, false);
  }
  
  SignIn(data) {
    let url = config.SiSignIngnUp;
    return axiosServices.post(url, data, false);
  }
}

export default UserServices;
