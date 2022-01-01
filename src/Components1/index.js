import React from 'react';
import { connect } from 'react-redux';
import Header from '../Components1/Header';
import Sidebar from '../Components1/AppBody/Sidebar';
import Feed from '../Components1/AppBody/Feed';
import Widgets from '../Components1/AppBody/Widgets';
import FacebookLogin from './FacebookLogin';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './styles.css';
const LandingPage = (props) => {
	const {
		store: { userDetails, isLoading },
	} = props;
	//dekhna loader beech mein nahi aa rha
	return (
		<div>
			{isLoading && (
				<div className="loaderSpinner">
					<Loader type="ThreeDots" color="#ed0707" height={80} width={80} />
				</div>
			)}
			{userDetails && userDetails._id ? (
				<>
					<Header />
					<div className="app__body">
						<Sidebar />
						<Feed />

						<Widgets />
					</div>
				</>
			) : (
				<FacebookLogin />
			)}
		</div>
	);
};

const mapStateToProps = ({ reducer }) => ({
	store: reducer,
});

export default connect(mapStateToProps)(LandingPage);
