import React, { useState } from "react";
import { connect } from "react-redux";
import "./styles.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
const MessageSender = () => {
  const [state, setState] = useState({
    sender_input: "",
    image_url: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault(); // stops getting from page refreshed

    //some db stuff

    setState({
      sender_input: "",
      image_url: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        {/* <Avatar src={user.photoURL} /> */}
        <form>
          <input
            type="text"
            name="sender_input"
            className="messageSender__input"
            // placeholder={`What's on your mind, ${user.displayName}`}
            value={state.sender_input}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image_url"
            placeholder="Image URL(Optional)"
            value={state.image_url}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ reducer }) => ({
  store: reducer,
});

export default connect(mapStateToProps)(MessageSender);
