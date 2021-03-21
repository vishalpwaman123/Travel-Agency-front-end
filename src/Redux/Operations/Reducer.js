import { SIDENAVSTATUS } from "./Type";
import { PACKEGEBUTTONON } from "./Type";
import { CUSTOMERBUTTONON } from "./Type";
import { FEEDBACKBUTTONON } from "./Type";
import { ADDDETAILBUTTONON } from "./Type";

const initialState = {
  MenuStatus: false,
  PackageButtonOn: false,
  CustomerButtonOn: false,
  FeedbackButtonOn: false,
  AddDetailButtonOn: false,
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
      };

    default:
      return state;
  }
};

export default travellerreducer;
