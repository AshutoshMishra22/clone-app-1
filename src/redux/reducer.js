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
	FAILURE_UPDATE_FEED,
	SUCCESS_UPDATE_FEED,
	DEFAULT_CASE,
	TAB_SELECT,
	SET_USER,
	SET_FORM_FIELD_VALUE,
	CLEAR_FORM,
} from './constants';
import {
	EMAIL,
	PASSWORD,
	USERNAME_REG,
	EMAIL_REG,
	PASSWORD_REG,
	CNF_PASSWORD_REG,
} from '../common/formFields';
const initialState = {
	isLoading: false,
	successfulCount: 0,
	failedCount: 0,
	addNewFeedRes: [],
	errorMessage: '',
	defaultCaseData: 'I,m here',
	updatedState: '',
	selectedTab: 'HomeIcon',
	user: null,
	[EMAIL]: { value: 'abhishek@gmail.com', err: '' },
	[PASSWORD]: { value: 'abhishek', err: '' },
	[USERNAME_REG]: { value: '', err: '' },
	[EMAIL_REG]: { value: '', err: '' },
	[PASSWORD_REG]: { value: '', err: '' },
	[CNF_PASSWORD_REG]: { value: '', err: '' },
	userDetails: {},
	registrationDetails: {},
};
const componentReducer = (state = initialState, action) => {
	const { type, payload, key, error } = action;
	switch (type) {
		case REQUEST_USER_DETAILS:
		case REQUEST_USER_REGISTRATION:
		case REQUEST_ADD_FEED:
		case REQUEST_UPDATE_FEED:
			return { ...state, isLoading: true };
		case SUCCESS_USER_DETAILS:
			return {
				...state,
				userDetails: payload,
				successfulCount: state.successfulCount + 1,
				isLoading: false,
			};
		case SUCCESS_USER_REGISTRATION:
			return {
				...state,
				registrationDetails: payload,
				errorMessage: '',
				successfulCount: state.successfulCount + 1,
				[USERNAME_REG]: { value: '', err: '' },
				[EMAIL_REG]: { value: '', err: '' },
				[PASSWORD_REG]: { value: '', err: '' },
				[CNF_PASSWORD_REG]: { value: '', err: '' },
				isLoading: false,
			};
		case SUCCESS_ADD_FEED:
		case SUCCESS_UPDATE_FEED:
			return {
				...state,
				isLoading: false,
				addNewFeedRes: payload,
				successfulCount: state.successfulCount + 1,
			};
		case FAILURE_USER_DETAILS:
		case FAILURE_USER_REGISTRATION:
		case FAILURE_ADD_FEED:
		case FAILURE_UPDATE_FEED:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
				failedCount: state.failedCount + 1,
			};
		case DEFAULT_CASE:
			return {
				...initialState,
				updatedState: 'Myself got updated',
			};
		case TAB_SELECT:
			return {
				...state,
				selectedTab: payload,
			};
		case SET_USER:
			return {
				...initialState,
				user: payload.user,
			};
		case SET_FORM_FIELD_VALUE:
			return {
				...state,
				[key]: { value: payload, err: error },
			};
		case CLEAR_FORM:
			return {
				...initialState,
			};
		default:
			return { ...initialState };
	}
};
export default componentReducer;
