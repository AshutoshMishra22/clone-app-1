import {
  REQUEST_ADD_FEED,
  SUCCESS_ADD_FEED,
  FAILURE_ADD_FEED,
  REQUEST_UPDATE_FEED,
  FAILURE_UPDATE_FEED,
  SUCCESS_UPDATE_FEED,
} from "./constants";

const initialState = {
  isLoading: false,
  successfulCount: 0,
  failedCount: 0,
  addNewFeedRes: [],
  errorMessage: "",
};
const componentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_ADD_FEED:
    case REQUEST_UPDATE_FEED:
      return { ...state, isLoading: true };
    case SUCCESS_ADD_FEED:
    case SUCCESS_UPDATE_FEED:
      return {
        ...state,
        isLoading: false,
        addNewFeedRes: payload,
        successfulCount: state.successfulCount + 1,
      };
    case FAILURE_ADD_FEED:
    case FAILURE_UPDATE_FEED:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
        failedCount: state.failedCount + 1,
      };

    default:
      return { ...initialState };
  }
};
export default componentReducer;
