import {
  REQUEST_ADD_FEED,
  SUCCESS_ADD_FEED,
  FAILURE_ADD_FEED,
  REQUEST_UPDATE_FEED,
  SUCCESS_UPDATE_FEED,
  FAILURE_UPDATE_FEED,
} from "./constants";

export const requestaddFeed = (payload) => ({
  type: REQUEST_ADD_FEED,
  payload,
});
export const successaddFeed = (payload) => ({
  type: SUCCESS_ADD_FEED,
  payload,
});
export const failureaddFeed = (payload) => ({
  type: FAILURE_ADD_FEED,
  payload,
});

export const requestupdateFeed = (payload) => ({
  type: REQUEST_UPDATE_FEED,
  payload,
});
export const successupdateFeed = (payload) => ({
  type: SUCCESS_UPDATE_FEED,
  payload,
});
export const failureupdateFeed = (payload) => ({
  type: FAILURE_UPDATE_FEED,
  payload,
});
