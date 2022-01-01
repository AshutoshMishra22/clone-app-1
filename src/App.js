import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Box } from '@mui/material';
import LandingScreen from './Components1';

const App = () => {
	return (
		<Provider store={store}>
			<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
				<LandingScreen />
			</Box>
		</Provider>
	);
};
// const mapStateToProps = ({ reducer }) => ({
// 	store: reducer,
// });

// export default connect(mapStateToProps)(App);
export default App;
