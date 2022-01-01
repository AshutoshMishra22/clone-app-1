import React, { useState } from 'react';
// import { useNavigate, Link } from "react-router-dom";
import './styles.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { EMAIL, PASSWORD } from '../../common/formFields';
import Registration from '../Registration';
import { loginUser, setValueAndValidate } from '../../redux/actionCreators';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import { clearFormData } from '../../redux/actions';
const LoginFb = (props) => {
	const { store, handleChange, clearFormData, initiateUserLogin } = props;
	const [open, setOpen] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	let emailErr = store[EMAIL].err;
	let passErr = store[PASSWORD].err;
	const handleClose = () => {
		setOpen(false);
		clearFormData();
	};
	const handleOpen = () => {
		setOpen(true);
		clearFormData();
	};
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const handleLoginDetails = () => {
		const payload = {
			email: store[EMAIL].value,
			password: store[PASSWORD].value,
		};
		initiateUserLogin(payload);
	};

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 463,
		height: 'auto',
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	// const navigate = useNavigate();
	return (
		<div className="login">
			<div className="fbLoginLogo">
				<img
					src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
					alt="facebook_text"
					className="login__fbText"
				/>
				<p className="fbInfo">
					Facebook helps you connect and share with the people in your life.
				</p>
			</div>
			<div className="loginBoxContainer">
				<div className="loginBoxContent">
					<Box
						component="form"
						sx={{
							'& > :not(style)': {
								margin: '12px 20px',
								width: '48ch',
							},
						}}
						noValidate
						autoComplete="off"
					>
						<TextField
							id={
								emailErr.length > 0
									? 'outlined-error-helper-text'
									: 'outlined-basic'
							}
							placeholder="Email address"
							onChange={(e) => handleChange(EMAIL, e.target.value)}
							onBlur={(e) => handleChange(EMAIL, e.target.value)}
							value={store[EMAIL].value}
							error={emailErr.length > 0}
							helperText={emailErr}
						/>
						<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
							<OutlinedInput
								id={
									passErr.length > 0
										? 'outlined-error-helper-text'
										: 'outlined-adornment-password'
								}
								type={showPassword ? 'text' : 'password'}
								placeholder="Password"
								onChange={(e) => handleChange(PASSWORD, e.target.value)}
								onBlur={(e) => handleChange(PASSWORD, e.target.value)}
								value={store[PASSWORD].value}
								error={passErr.length > 0}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
							<p className="errorPass">{passErr}</p>
						</FormControl>
					</Box>
					<Button
						className="buttonLogin"
						disabled={
							store[EMAIL].value === '' ||
							store[PASSWORD].value === '' ||
							emailErr.length > 0 ||
							passErr.length > 0
						}
						onClick={handleLoginDetails}
					>
						Log In
					</Button>
					<hr className="horizontalLine" />
					<Button
						className="buttonRegister"
						// onClick={() => {
						// 	navigate("/registration");
						// }}
						onClick={handleOpen}
					>
						Create Account
					</Button>
					<Modal
						open={open}
						// onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={style}>
							<Typography id="modal-modal-title" variant="h6" component="h2">
								Sign Up
								<CloseIcon className="closeIcon" onClick={handleClose} />
							</Typography>
							<hr className="regHorizontalLine " />
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								<Registration />
							</Typography>
						</Box>
					</Modal>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = ({ reducer }) => ({
	store: reducer,
});
const mapDispatchToProps = (dispatch) => ({
	handleChange: (key, payload) => dispatch(setValueAndValidate(key, payload)),
	clearFormData: () => dispatch(clearFormData()),
	initiateUserLogin: (payload) => dispatch(loginUser(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginFb);
