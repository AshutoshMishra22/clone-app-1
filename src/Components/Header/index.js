import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import fb_img from '../../images/fb_img.png';
// import Feed from '../AppBody/Feed';
// import Sidebar from '../AppBody/Sidebar';
// import Widgets from '../AppBody/Widgets';
import { tabSwitch } from '../../actions/actions';

const Header = (props) => {
	const { handleTabSwitch, selectedTab, user } = props;
	// const compName = {
	// 	HomeIcon: Feed,
	// 	FlagIcon: Sidebar,
	// 	SubscriptionsIcon: Widgets,
	// 	StorefrontIcon: Feed,
	// 	SupervisedUserCircleIcon: Sidebar,
	// };
	// const Comp = compName[selectedTab];

	return (
		<div className="header">
			<div className="header__left">
				<img src={fb_img} alt="fb_image" />
				<div className="header__input">
					<SearchIcon />
					<input type="text" placeholder="Search Facebook" />
				</div>
			</div>
			{/* <Comp /> */}
			<div className="header__center">
				<div
					className={`header__option${
						selectedTab === 'HomeIcon' ? '--active' : ''
					}`}
				>
					<HomeIcon
						fontSize="large"
						onClick={() => handleTabSwitch('HomeIcon')}
					/>
				</div>
				<div
					className={`header__option${
						selectedTab === 'FlagIcon' ? '--active' : ''
					}`}
				>
					<FlagIcon
						fontSize="large"
						onClick={() => handleTabSwitch('FlagIcon')}
					/>
				</div>
				<div
					className={`header__option${
						selectedTab === 'SubscriptionsIcon' ? '--active' : ''
					}`}
				>
					<SubscriptionsIcon
						fontSize="large"
						onClick={() => handleTabSwitch('SubscriptionsIcon')}
					/>
				</div>
				<div
					className={`header__option${
						selectedTab === 'StorefrontIcon' ? '--active' : ''
					}`}
				>
					<StorefrontIcon
						fontSize="large"
						onClick={() => handleTabSwitch('StorefrontIcon')}
					/>
				</div>
				<div
					className={
						selectedTab === 'SupervisedUserCircleIcon'
							? 'header__option--active'
							: 'header__option'
					}
				>
					<SupervisedUserCircleIcon
						fontSize="large"
						onClick={() => handleTabSwitch('SupervisedUserCircleIcon')}
					/>
				</div>
			</div>
			<div className="header__right">
				<div className="header__info">
					<Avatar src={user.photoURL} />
					<h4>{user.displayName}</h4>
				</div>
				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
};
export const mapStateToProps = (state) => {
	const { selectedTab, user } = state.testReducer;
	return { selectedTab, user };
};
export const mapDispatchToProps = (dispatch) => ({
	handleTabSwitch: (payload) => dispatch(tabSwitch(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
