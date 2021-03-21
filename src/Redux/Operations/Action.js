import { SIDENAVSTATUS } from "./Type";
import { PACKEGEBUTTONON } from "./Type";
import { CUSTOMERBUTTONON } from "./Type";
import { FEEDBACKBUTTONON } from "./Type";

export const sideNavStatus = () => {
  return {
    type: SIDENAVSTATUS,
  };
};

export const packageButtonOn = () => {
  return {
    type: PACKEGEBUTTONON,
  };
};

export const customerButtonOn = () => {
  return {
    type: CUSTOMERBUTTONON,
  };
};

export const feedbackButtonOn = () => {
  return {
    type: FEEDBACKBUTTONON,
  };
};
