import {
	requestUserDetails,
	successUserDetails,
	failureUserDetails,
	requestUserRegistration,
	successUserRegistration,
	failureUserRegistration,
	requestaddFeed,
	successaddFeed,
	failureaddFeed,
	requestupdateFeed,
	successupdateFeed,
	failureupdateFeed,
	defaultCase,
	selectTabOption,
	userDetails,
	setFormFieldValue,
} from './actions';
import axios from './axios';
import { PASSWORD_REG } from '../common/formFields';
import validate from '../validations';

export const loginUser = (payload) => (dispatch) => {
	dispatch(requestUserDetails(payload));
	axios
		.post('/api/auth/login', payload)
		.then((response) => {
			dispatch(successUserDetails(response.data));
		})
		.catch((error) => {
			dispatch(failureUserDetails(error.response.data));
		});
};
export const registerUser = (payload) => (dispatch) => {
	dispatch(requestUserRegistration(payload));
	axios
		.post('/api/auth/register', payload)
		.then((response) => {
			dispatch(successUserRegistration(response.data));
		})
		.catch((error) => {
			dispatch(failureUserRegistration(error.response.data));
		});
};
export const addNewFeed = (payload) => (dispatch) => {
	dispatch(requestaddFeed(payload));
	axios
		.post('/api/feed/add', payload)
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
export const defaultCaseCall = () => (dispatch) => {
	dispatch(defaultCase());
};
export const tabSwitch = (payload) => (dispatch) => {
	dispatch(selectTabOption(payload));
};
export const setUserDetails = (payload) => (dispatch) => {
	dispatch(userDetails(payload));
};
export const setValueAndValidate = (key, payload) => (dispatch, getState) => {
	const { reducer } = getState();
	let pass = reducer[PASSWORD_REG].value;
	const err = validate(key, payload, pass);
	dispatch(setFormFieldValue(key, payload, err));
};
