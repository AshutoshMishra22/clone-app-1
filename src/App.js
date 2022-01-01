import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/AppBody/Sidebar';
import Widgets from './Components/AppBody/Widgets';
import Feed from './Components/AppBody/Feed';
// import Login from "./Components/Login";
// import Registration from "./Components/Registration";
import LoginFb from './Components/FacebookLogin';
// import  DisplayWeather  from "./Containers/DisplayWeather"
// import routes from "./routes";
const App = (props) => {
	const { user } = props;
	return (
		<div className="app">
			{!user ? (
				<LoginFb />
			) : (
				<>
					<Header />
					<div className="app__body">
						<Sidebar />
						<Feed />
						<Widgets />
					</div>
				</>
			)}
			{/* <DisplayWeather/> */}
			{/* {routes} */}
		</div>
	);
};
export const mapStateToProps = (state) => {
	const { user } = state.testReducer;
	return { user };
};

export default connect(mapStateToProps)(App);
