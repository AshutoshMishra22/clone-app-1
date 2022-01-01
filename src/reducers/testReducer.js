import {
	DEFAULT_CASE,
	TAB_SELECT,
	SET_USER,
	SET_FORM_FIELD_VALUE,
	CLEAR_FORM,
} from '../actions/actionTypes';
import {
	EMAIL,
	PASSWORD,
	USERNAME_REG,
	EMAIL_REG,
	PASSWORD_REG,
	CNF_PASSWORD_REG,
} from '../constant/formFields';
import { tabLabelName } from '../constant';

const initialState = {
	defaultCaseData: 'I,m here',
	updatedState: '',
	selectedTab: 'HomeIcon',
	tabName: tabLabelName,
	user: null,
	[EMAIL]: { value: '', err: '' },
	[PASSWORD]: { value: '', err: '' },
	[USERNAME_REG]: { value: '', err: '' },
	[EMAIL_REG]: { value: '', err: '' },
	[PASSWORD_REG]: { value: '', err: '' },
	[CNF_PASSWORD_REG]: { value: '', err: '' },
};

const testReducer = (state = initialState, action) => {
	console.log(action, 'action');
	const { type, payload, key, error } = action;
	switch (type) {
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
			return {
				...state,
			};
	}
};
export default testReducer;
