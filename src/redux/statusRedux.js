import App from "../App";
import { API_URL } from "../config";

//selectors
export const getAllStatusOptions = ({ status }) => status;

// actions
const createActionName = (actionName) => `app/status/${actionName}`;
const DATA_STATUS = createActionName("DATA_STATUS");

// action creators
export const getDataStatus = (payload) => ({ type: DATA_STATUS, payload });
export const fetchDataStatus = () => {
  return (dispatch) => {
    fetch(API_URL + "/status")
      .then((res) => res.json())
      .then((status) => dispatch(getDataStatus(status)));
  };
};

const statusReducer = (statePart = [], action) => {
  switch (action.type) {
    case DATA_STATUS:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default statusReducer;