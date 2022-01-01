import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import fb_img from "../../images/fb_img.png";
import { tabSwitch } from "../../redux/actionCreators";

const Header = (props) => {
  const { handleTabSwitch, store } = props;
  const { selectedTab, user } = store;
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
            selectedTab === "HomeIcon" ? "--active" : ""
          }`}
        >
          <HomeIcon
            fontSize="large"
            onClick={() => handleTabSwitch("HomeIcon")}
          />
        </div>
        <div
          className={`header__option${
            selectedTab === "FlagIcon" ? "--active" : ""
          }`}
        >
          <FlagIcon
            fontSize="large"
            onClick={() => handleTabSwitch("FlagIcon")}
          />
        </div>
        <div
          className={`header__option${
            selectedTab === "SubscriptionsIcon" ? "--active" : ""
          }`}
        >
          <SubscriptionsIcon
            fontSize="large"
            onClick={() => handleTabSwitch("SubscriptionsIcon")}
          />
        </div>
        <div
          className={`header__option${
            selectedTab === "StorefrontIcon" ? "--active" : ""
          }`}
        >
          <StorefrontIcon
            fontSize="large"
            onClick={() => handleTabSwitch("StorefrontIcon")}
          />
        </div>
        <div
          className={
            selectedTab === "SupervisedUserCircleIcon"
              ? "header__option--active"
              : "header__option"
          }
        >
          <SupervisedUserCircleIcon
            fontSize="large"
            onClick={() => handleTabSwitch("SupervisedUserCircleIcon")}
          />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info"></div>
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
const mapStateToProps = ({ reducer }) => ({
  store: reducer,
});
const mapDispatchToProps = (dispatch) => ({
  handleTabSwitch: (payload) => dispatch(tabSwitch(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
