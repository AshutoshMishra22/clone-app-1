import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import Button from "@mui/material/Button";
import { auth, provider } from "./../../firebase";
import { setUserDetails } from "../../actions/actions";
const Login = (props) => {
	const { setUserDetails } = props;
	const handleSignIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				setUserDetails(result);
			})
			.catch((err) => {
				alert(err.message);
			});
	};
	return (
		<div className="login">
			<div className="loginLogo">
				<img
					src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
					alt="facebook_logo"
					className="login__fbLogo"
				/>
				<img
					src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
					alt="facebook_text"
					className="login__fbText"
				/>
			</div>
			<Button type="submit" onClick={handleSignIn}>
				Sign In
			</Button>
		</div>
	);
};

export const mapDispatchToProps = (dispatch) => ({
	setUserDetails: (payload) => dispatch(setUserDetails(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
