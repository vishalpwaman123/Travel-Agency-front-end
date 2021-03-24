import { SIDENAVSTATUS } from "./Type";
import { PACKEGEBUTTONON } from "./Type";
import { CUSTOMERBUTTONON } from "./Type";
import { FEEDBACKBUTTONON } from "./Type";
import { ADDDETAILBUTTONON } from "./Type";
import { SHOWALLPACKAGEBUTTONON } from "./Type";
import { ADDNEWPACKAGEBUTTON } from "./Type";
import { PACKAGEDETAILBUTTONON } from "./Type";
import { SHOWALLCUSTOMERSBUTTON } from "./Type";
const initialState = {
  MenuStatus: false,
  PackageButtonOn: false,
  CustomerButtonOn: false,
  FeedbackButtonOn: false,
  AddDetailButtonOn: false,
  ShowAllPackagesButtonOn: false,
  AddNewPackageButton: false,
  PackageDetailButton: false,
  PackagePassData: null,
  getPassUserDetail: null,
  ShowAllCustomer: false,
};

const travellerreducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDENAVSTATUS:
      return {
        ...state,
        MenuStatus: !state.MenuStatus,
      };

    case PACKEGEBUTTONON:
      return {
        ...state,
        PackageButtonOn: true,
      };

    case CUSTOMERBUTTONON:
      return {
        ...state,
        CustomerButtonOn: true,
        PackageButtonOn: false,
        FeedbackButtonOn: false,
      };

    case FEEDBACKBUTTONON:
      return {
        ...state,
        CustomerButtonOn: false,
        PackageButtonOn: false,
        FeedbackButtonOn: true,
      };

    case ADDDETAILBUTTONON:
      return {
        ...state,
        CustomerButtonOn: false,
        PackageButtonOn: false,
        FeedbackButtonOn: false,
        AddDetailButtonOn: true,
        getPassUserDetail: action.data,
      };

    case SHOWALLPACKAGEBUTTONON:
      return {
        ...state,
        CustomerButtonOn: false,
        PackageButtonOn: false,
        FeedbackButtonOn: false,
        AddDetailButtonOn: false,
        ShowAllPackagesButtonOn: true,
      };

    case ADDNEWPACKAGEBUTTON:
      return {
        ...state,
        CustomerButtonOn: false,
        PackageButtonOn: false,
        FeedbackButtonOn: false,
        AddDetailButtonOn: false,
        ShowAllPackagesButtonOn: false,
        AddNewPackageButton: true,
      };

    case PACKAGEDETAILBUTTONON:
      return {
        ...state,
        CustomerButtonOn: false,
        PackageButtonOn: false,
        FeedbackButtonOn: false,
        AddDetailButtonOn: false,
        ShowAllPackagesButtonOn: false,
        AddNewPackageButton: false,
        PackageDetailButton: true,
        PackagePassData: action.data,
      };

    case SHOWALLCUSTOMERSBUTTON:
      return {
        ...state,
        CustomerButtonOn: false,
        PackageButtonOn: false,
        FeedbackButtonOn: false,
        AddDetailButtonOn: false,
        ShowAllPackagesButtonOn: false,
        AddNewPackageButton: false,
        PackageDetailButton: false,
        ShowAllCustomer: true,
      };

    default:
      return state;
  }
};

export default travellerreducer;
