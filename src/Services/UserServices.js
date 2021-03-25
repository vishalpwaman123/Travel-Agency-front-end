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

  GetAllPackeges() {
    let url = config.GetAllPackeges;
    return axiosServices.get(url, false);
  }

  GetAllCustomers() {
    let url = config.GetAllCustomers;
    return axiosServices.get(url, false);
  }

  GetUserDetailById(data) {
    let url = config.GetUserDetailById;
    return axiosServices.post(url, data, false);
  }

  addUserDetail(data) {
    let url = config.addUserDetail;
    return axiosServices.post(url, data, false);
  }

  SubmitFeedback(data) {
    let url = config.SubmitFeedback;
    return axiosServices.post(url, data, false);
  }

  GetAllFeedBack() {
    let url = config.GetAllFeedBack;
    return axiosServices.get(url, false);
  }

  AddUserFeedBack(data) {
    let url = config.AddUserFeedBack;
    return axiosServices.post(url, data, false);
  }

  GetUserBuyPackages(data) {
    let url = config.GetUserBuyPackages;
    return axiosServices.post(url, data, false);
  }
  GetAllUserByPackages() {
    let url = config.GetAllUserByPackages;
    return axiosServices.get(url, false);
  }
}

export default UserServices;
