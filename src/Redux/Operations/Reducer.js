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
import { SNACKBARBUTTON } from "./Type";
import { DEFAULTBUTTON } from "./Type";

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
  ShowCustomerBuyPackages: false,
  buyPackageCustomerList: false,
  SnackBarmessage: "",
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
        getPassUserDetail: action.data,
        CustomerButtonOn: false,
        FeedbackButtonOn: false,
        AddDetailButtonOn: false,
        ShowAllPackagesButtonOn: false,
        AddNewPackageButton: false,
        PackageDetailButton: false,
        ShowAllCustomer: false,
        ShowCustomerBuyPackages: false,
        buyPackageCustomerList: false,
      };

    case CUSTOMERBUTTONON:
      return {
        ...state,
        PackageButtonOn: false,
        CustomerButtonOn: true,

        FeedbackButtonOn: false,
        AddDetailButtonOn: false,
        ShowAllPackagesButtonOn: false,
        AddNewPackageButton: false,
        PackageDetailButton: false,
        ShowAllCustomer: false,
        ShowCustomerBuyPackages: false,
        buyPackageCustomerList: false,
      };

    case FEEDBACKBUTTONON:
      return {
        ...state,
        CustomerButtonOn: false,
        PackageButtonOn: false,
        FeedbackButtonOn: true,
        getPassUserDetail: action.data,

        AddDetailButtonOn: false,
        ShowAllPackagesButtonOn: false,
        AddNewPackageButton: false,
        PackageDetailButton: false,
        ShowAllCustomer: false,
        ShowCustomerBuyPackages: false,
        buyPackageCustomerList: false,
      };

    case ADDDETAILBUTTONON:
      return {
        ...state,
        CustomerButtonOn: false,
        PackageButtonOn: false,
        FeedbackButtonOn: false,
        AddDetailButtonOn: true,
        getPassUserDetail: action.data,

        ShowAllPackagesButtonOn: false,
        AddNewPackageButton: false,
        PackageDetailButton: false,
        ShowAllCustomer: false,
        ShowCustomerBuyPackages: false,
        buyPackageCustomerList: false,
      };

    case SHOWALLPACKAGEBUTTONON:
      return {
        ...state,
        CustomerButtonOn: false,
        PackageButtonOn: false,
        FeedbackButtonOn: false,
        AddDetailButtonOn: false,
        ShowAllPackagesButtonOn: true,

        AddNewPackageButton: false,
        PackageDetailButton: false,
        ShowAllCustomer: false,
        ShowCustomerBuyPackages: false,
        buyPackageCustomerList: false,
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

        PackageDetailButton: false,
        ShowAllCustomer: false,
        ShowCustomerBuyPackages: false,
        buyPackageCustomerList: false,
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

        ShowAllCustomer: false,
        ShowCustomerBuyPackages: false,
        buyPackageCustomerList: false,
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

    case BUYPACKAGESCUSTOMERLISTBUTTON:
      return {
        ...state,
        CustomerButtonOn: false,
        PackageButtonOn: false,
        FeedbackButtonOn: false,
        AddDetailButtonOn: false,
        ShowAllPackagesButtonOn: false,
        AddNewPackageButton: false,
        PackageDetailButton: false,
        ShowAllCustomer: false,
        ShowCustomerBuyPackages: false,
        buyPackageCustomerList: true,
      };

    case CUSTOMERBUYPACKAGEBUTTON:
      return {
        ...state,
        CustomerButtonOn: false,
        PackageButtonOn: false,
        FeedbackButtonOn: false,
        AddDetailButtonOn: false,
        ShowAllPackagesButtonOn: false,
        AddNewPackageButton: false,
        PackageDetailButton: false,
        ShowAllCustomer: false,
        ShowCustomerBuyPackages: true,
        getPassUserDetail: action.data,
      };

    case SNACKBARBUTTON:
      return {
        ...state,
        SnackBarmessage: action.message,
      };

    case DEFAULTBUTTON:
      return {
        ...state,
        CustomerButtonOn: false,
        PackageButtonOn: false,
        FeedbackButtonOn: false,
        AddDetailButtonOn: false,
        ShowAllPackagesButtonOn: false,
        AddNewPackageButton: false,
        PackageDetailButton: false,
        ShowAllCustomer: false,
        ShowCustomerBuyPackages: false,
      };

    default:
      return state;
  }
};

export default travellerreducer;
