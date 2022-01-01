import {
	DEFAULT_CASE,
	TAB_SELECT,
	SET_USER,
	SET_FORM_FIELD_VALUE,
	CLEAR_FORM,
} from './actionTypes';
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
