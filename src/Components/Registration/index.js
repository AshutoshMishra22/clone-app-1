import React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { setValueAndValidate } from '../../actions/actions';
import './styles.css';
import '../FacebookLogin/styles.css';
import {
	EMAIL_REG,
	PASSWORD_REG,
	USERNAME_REG,
	CNF_PASSWORD_REG,
} from '../../constant/formFields';
const Registration = (props) => {
	const { handleChange, testReducer } = props;
	let userNameErr = testReducer[USERNAME_REG].err;
	let emailErr = testReducer[EMAIL_REG].err;
	let passErr = testReducer[PASSWORD_REG].err;
	let cnfrmPassErr = testReducer[CNF_PASSWORD_REG].err;
	const handleClick = () => {
		console.log('Handle click called');
	};

	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': {
					margin: '8px 0',
					width: '52ch',
				},
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id={userNameErr > 0 ? 'outlined-error-helper-text' : 'outlined-basic'}
				placeholder="User Name"
				onChange={(e) => {
					handleChange(USERNAME_REG, e.target.value);
				}}
				onBlur={(e) => {
					handleChange(USERNAME_REG, e.target.value);
				}}
				value={testReducer[USERNAME_REG].value}
				error={userNameErr.length > 0}
				helperText={userNameErr}
			/>
			<TextField
				id={emailErr > 0 ? 'outlined-error-helper-text' : 'outlined-basic'}
				placeholder="Email"
				onChange={(e) => {
					handleChange(EMAIL_REG, e.target.value);
				}}
				onBlur={(e) => {
					handleChange(EMAIL_REG, e.target.value);
				}}
				value={testReducer[EMAIL_REG].value}
				error={emailErr.length > 0}
				helperText={emailErr}
			/>
			<TextField
				id={passErr > 0 ? 'outlined-error-helper-text' : 'outlined-basic'}
				placeholder="Password"
				onChange={(e) => {
					handleChange(PASSWORD_REG, e.target.value);
				}}
				onBlur={(e) => {
					handleChange(PASSWORD_REG, e.target.value);
				}}
				value={testReducer[PASSWORD_REG].value}
				error={passErr.length > 0}
				helperText={passErr}
			/>
			<TextField
				id={cnfrmPassErr > 0 ? 'outlined-error-helper-text' : 'outlined-basic'}
				placeholder="Confirm Password"
				onChange={(e) => {
					handleChange(CNF_PASSWORD_REG, e.target.value);
				}}
				onBlur={(e) => {
					handleChange(CNF_PASSWORD_REG, e.target.value);
				}}
				value={testReducer[CNF_PASSWORD_REG].value}
				error={cnfrmPassErr.length > 0}
				helperText={cnfrmPassErr}
			/>
			<Button
				className="buttonRegister"
				disabled={
					testReducer[USERNAME_REG].value === '' ||
					testReducer[EMAIL_REG].value === '' ||
					testReducer[PASSWORD_REG].value === '' ||
					testReducer[CNF_PASSWORD_REG].value === '' ||
					userNameErr.length > 0 ||
					emailErr.length > 0 ||
					passErr.length > 0 ||
					cnfrmPassErr.length > 0
				}
				onClick={handleClick}
			>
				Sign Up
			</Button>
		</Box>
	);
};
export const mapStateToProps = (state) => {
	const { testReducer } = state;
	return { testReducer };
};
export const mapDispatchToProps = (dispatch) => ({
	handleChange: (key, payload) => {
		dispatch(setValueAndValidate(key, payload));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
