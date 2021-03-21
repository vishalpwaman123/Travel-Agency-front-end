import { createStore } from "redux";
import travellerreducer from "./Operations/Reducer";

const store = createStore(travellerreducer);

export default store;
