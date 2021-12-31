import {
  REQUEST_REGISTER,
  SUCCESS_REGISTER,
  FAILURE_REGISTER,
} from "./constants";

const initialState = {
  successfulCount: 0,
  failedCount: 0,
  userDetails: {},
  errorMessage: "",
};
const componentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_REGISTER:
      return { ...state, userDetails: {} };
    case SUCCESS_REGISTER:
      return {
        ...state,
        userDetails: payload,
        successfulCount: state.successfulCount + 1,
      };
    case FAILURE_REGISTER:
      return {
        ...state,
        errorMessage: payload,
        failedCount: state.failedCount + 1,
      };
    default:
      return { ...initialState };
  }
};
export default componentReducer;
