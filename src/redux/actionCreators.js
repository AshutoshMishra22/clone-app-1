import {
  requestaddFeed,
  successaddFeed,
  failureaddFeed,
  requestupdateFeed,
  successupdateFeed,
  failureupdateFeed,
} from "./actions";
import axios from "./axios";

export const addNewFeed = (payload) => (dispatch) => {
  dispatch(requestaddFeed(payload));
  axios
    .post("/api/feed/add", payload)
    .then((response) => {
      dispatch(successaddFeed(response.data));
    })
    .catch((error) => {
      dispatch(failureaddFeed(error.response.data));
    });
};

export const updateFeed = (payload) => (dispatch) => {
  dispatch(requestupdateFeed(payload));
  axios
    .put(`/api/feed/update/${payload.id}`, payload)
    .then((response) => {
      dispatch(successupdateFeed(response.data));
    })
    .catch((error) => {
      dispatch(failureupdateFeed(error.response.data));
    });
};
