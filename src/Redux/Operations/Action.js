import { SIDENAVSTATUS } from "./Type";
import { PACKEGEBUTTONON } from "./Type";
import { CUSTOMERBUTTONON } from "./Type";
import { FEEDBACKBUTTONON } from "./Type";
import { ADDDETAILBUTTONON } from "./Type";
import { SHOWALLPACKAGEBUTTONON } from "./Type";
import { ADDNEWPACKAGEBUTTON } from "./Type";
import { PACKAGEDETAILBUTTONON } from "./Type";
import { SHOWALLCUSTOMERSBUTTON } from "./Type";
import { CUSTOMERBUYPACKAGEBUTTON } from "./Type";
import { BUYPACKAGESCUSTOMERLISTBUTTON } from "./Type";

export const sideNavStatus = () => {
  return {
    type: SIDENAVSTATUS,
  };
};

export const packageButtonOn = (getUserDetail) => {
  return {
    type: PACKEGEBUTTONON,
    data: getUserDetail,
  };
};

export const customerButtonOn = () => {
  return {
    type: CUSTOMERBUTTONON,
  };
};

export const feedbackButtonOn = (getUserDetail) => {
  return {
    type: FEEDBACKBUTTONON,
    data: getUserDetail,
  };
};

export const adddetailButtonOn = (getUserDetail) => {
  return {
    type: ADDDETAILBUTTONON,
    data: getUserDetail,
  };
};

export const showAllPackagesButtonOn = () => {
  return {
    type: SHOWALLPACKAGEBUTTONON,
  };
};

export const addNewPackageButtonOn = () => {
  return {
    type: ADDNEWPACKAGEBUTTON,
  };
};

export const packageDetailButtonOn = (note) => {
  return {
    type: PACKAGEDETAILBUTTONON,
    data: note,
  };
};

export const showAllCustomerButton = () => {
  return {
    type: SHOWALLCUSTOMERSBUTTON,
  };
};

export const CustomerBuyPackageButton = (data) => {
  return {
    type: CUSTOMERBUYPACKAGEBUTTON,
    data: data,
  };
};

export const BuyPackageCustomerListButton = () => {
  return {
    type: BUYPACKAGESCUSTOMERLISTBUTTON,
  };
};
