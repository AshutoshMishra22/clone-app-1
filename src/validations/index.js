const validate = (key, data, p) => {
	let errorText = '';
	let regexEmail =
		// eslint-disable-next-line
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	switch (key) {
		case 'email':
			if (data === '') {
				errorText = 'Please enter your email address';
				return errorText;
			} else if (data !== '' && !regexEmail.test(data)) {
				errorText = 'Please enter valid email address';
				return errorText;
			} else return '';

		case 'password':
			if (data === '') {
				errorText = 'Please enter your password';
				return errorText;
			} else return '';

		case 'emailreg':
			if (data === '') {
				errorText = 'Please enter your email address';
				return errorText;
			} else if (data !== '' && !regexEmail.test(data)) {
				errorText = 'Please enter valid email address';
				return errorText;
			} else return '';

		case 'passwordreg':
			if (data === '') {
				errorText = 'Please enter your password';
				return errorText;
			} else if (data.length < 7) {
				errorText = 'Password should be gretaer than 6 characters';
				return errorText;
			} else return '';
		case 'usernamereg':
			if (data === '') {
				errorText = 'Please enter your user name';
				return errorText;
			} else return '';

		case 'cnfpasswordreg':
			if (data === '') {
				errorText = 'Please enter your password';
				return errorText;
			} else if (data !== p) {
				errorText = 'password not same';
				return errorText;
			} else return '';
		default:
			return '';
	}
};
export default validate;
