import React from "react";
import "./styles.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "../Post";
const Feed = (props) => {
	const date = new Date().toDateString();
	const time = new Date().toLocaleTimeString();
	const dateTime = date + " " + time;
	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />
			<Post
				image="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
				profilePic="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				message="This is post1"
				timestamp={dateTime}
				uername="sinhaabhi"
			/>
			<Post
				image="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg"
				profilePic="https://i.pinimg.com/236x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
				message="This is post2"
				timestamp={dateTime}
				uername="franklin"
			/>
			<Post
				image="https://www.newmynamepix.com/upload/post/sample/1589450747_Name_Write_Awesome_Looking_Girl_Profile_Pictures_Download_Free.jpg"
				profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5giPDW2Chg5Cbo2W6r5D5mT9X4Ibn-5bZQ&usqp=CAU"
				message="This is post3"
				timestamp={dateTime}
				uername="andrews"
			/>
		</div>
	);
};

export default Feed;
