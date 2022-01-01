import React from "react";
import "./styles.css";
import { Avatar } from "@mui/material";

const Story = (props) => {
	const { image, profilePic, title } = props;
	return (
		<div className="story" style={{ backgroundImage: `url(${image})` }}>
			<Avatar src={profilePic} className="story__avatar" />
			<h4>{title}</h4>
		</div>
	);
};

export default Story;
