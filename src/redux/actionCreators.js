import { requestRegister, successRegister, failureRegister } from "./actions";
import axios from "./axios";

export const registerUser = (payload) => (dispatch) => {
  dispatch(requestRegister(payload));
  axios
    .post("/api/auth/register", payload)
    .then((response) => {
      dispatch(successRegister(response.data));
    })
    .catch((error) => {
      dispatch(failureRegister(error.response.data));
    });
};
