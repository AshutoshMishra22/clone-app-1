import {
	REQUEST_USER_DETAILS,
	SUCCESS_USER_DETAILS,
	FAILURE_USER_DETAILS,
	REQUEST_USER_REGISTRATION,
	SUCCESS_USER_REGISTRATION,
	FAILURE_USER_REGISTRATION,
	REQUEST_ADD_FEED,
	SUCCESS_ADD_FEED,
	FAILURE_ADD_FEED,
	REQUEST_UPDATE_FEED,
	SUCCESS_UPDATE_FEED,
	FAILURE_UPDATE_FEED,
	DEFAULT_CASE,
	TAB_SELECT,
	SET_USER,
	SET_FORM_FIELD_VALUE,
	CLEAR_FORM,
} from './constants';

export const requestUserDetails = (payload) => ({
	type: REQUEST_USER_DETAILS,
	payload,
});
export const successUserDetails = (payload) => ({
	type: SUCCESS_USER_DETAILS,
	payload,
});
export const failureUserDetails = (payload) => ({
	type: FAILURE_USER_DETAILS,
	payload,
});
export const requestUserRegistration = (payload) => ({
	type: REQUEST_USER_REGISTRATION,
	payload,
});
export const successUserRegistration = (payload) => ({
	type: SUCCESS_USER_REGISTRATION,
	payload,
});
export const failureUserRegistration = (payload) => ({
	type: FAILURE_USER_REGISTRATION,
	payload,
});
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

export const defaultCase = () => ({
	type: DEFAULT_CASE,
});
export const selectTabOption = (payload) => ({
	type: TAB_SELECT,
	payload,
});
export const userDetails = (payload) => ({
	type: SET_USER,
	payload,
});
export const setFormFieldValue = (key, payload, error) => ({
	type: SET_FORM_FIELD_VALUE,
	key,
	payload,
	error,
});
export const clearFormData = () => ({
	type: CLEAR_FORM,
});
