import React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { registerUser, setValueAndValidate } from '../../redux/actionCreators';
import './styles.css';
import '../FacebookLogin/styles.css';
import {
	EMAIL_REG,
	PASSWORD_REG,
	USERNAME_REG,
	CNF_PASSWORD_REG,
} from '../../common/formFields';
const Registration = (props) => {
	const { handleChange, store, initiateUserRegistration } = props;
	const { registrationDetails, errorMessage } = store;
	let userNameErr = store[USERNAME_REG].err;
	let emailErr = store[EMAIL_REG].err;
	let passErr = store[PASSWORD_REG].err;
	let cnfrmPassErr = store[CNF_PASSWORD_REG].err;
	const handleClick = () => {
		const payload = {
			userName: store[USERNAME_REG].value,
			email: store[EMAIL_REG].value,
			password: store[PASSWORD_REG].value,
		};
		initiateUserRegistration(payload);
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
			{errorMessage && errorMessage.length > 0 && (
				<p className="errMsg">{errorMessage}</p>
			)}
			{registrationDetails && registrationDetails.id && (
				<p className="successMsg">User Registered Successfully</p>
			)}
			<TextField
				id={userNameErr > 0 ? 'outlined-error-helper-text' : 'outlined-basic'}
				placeholder="User Name"
				onChange={(e) => {
					handleChange(USERNAME_REG, e.target.value);
				}}
				onBlur={(e) => {
					handleChange(USERNAME_REG, e.target.value);
				}}
				value={store[USERNAME_REG].value}
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
				value={store[EMAIL_REG].value}
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
				value={store[PASSWORD_REG].value}
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
				value={store[CNF_PASSWORD_REG].value}
				error={cnfrmPassErr.length > 0}
				helperText={cnfrmPassErr}
			/>
			<Button
				className="buttonRegister"
				disabled={
					store[USERNAME_REG].value === '' ||
					store[EMAIL_REG].value === '' ||
					store[PASSWORD_REG].value === '' ||
					store[CNF_PASSWORD_REG].value === '' ||
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
const mapStateToProps = ({ reducer }) => ({
	store: reducer,
});
const mapDispatchToProps = (dispatch) => ({
	handleChange: (key, payload) => {
		dispatch(setValueAndValidate(key, payload));
	},
	initiateUserRegistration: (payload) => {
		dispatch(registerUser(payload));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
