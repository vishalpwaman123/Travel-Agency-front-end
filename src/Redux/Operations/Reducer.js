import { SIDENAVSTATUS } from "./Type";
import { PACKEGEBUTTONON } from "./Type";
import { CUSTOMERBUTTONON } from "./Type";
import { FEEDBACKBUTTONON } from "./Type";

const initialState = {
  MenuStatus: false,
  PackageButtonOn: false,
  CustomerButtonOn: false,
  FeedbackButtonOn: false,
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

    default:
      return state;
  }
};

export default travellerreducer;
