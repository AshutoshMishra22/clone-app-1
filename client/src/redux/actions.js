import {
  REQUEST_REGISTER,
  SUCCESS_REGISTER,
  FAILURE_REGISTER,
} from "./constants";

export const requestRegister = (payload) => ({
  type: REQUEST_REGISTER,
  payload,
});
export const successRegister = (payload) => ({
  type: SUCCESS_REGISTER,
  payload,
});
export const failureRegister = (payload) => ({
  type: FAILURE_REGISTER,
  payload,
});
