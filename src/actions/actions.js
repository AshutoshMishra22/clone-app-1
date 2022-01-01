import {
	defaultCase,
	selectTabOption,
	userDetails,
	setFormFieldValue,
} from './actionCreators';
import { PASSWORD_REG } from '../constant/formFields';
import validate from '../validations';
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
	const { testReducer } = getState();
	let pass = testReducer[PASSWORD_REG].value;
	const err = validate(key, payload, pass);
	dispatch(setFormFieldValue(key, payload, err));
};
