import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewFeed } from "../redux/actionCreators";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

export const useStyles = makeStyles((theme) => ({
  uploadBtn: {},
  container: {
    width: "50%",
    height: 500,
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: "20px !important",
    },
  },
  headerStyle : { margin: 0 },
  uploadStyle : { margin: "auto", marginTop: "16px" },
   buttonStyle: {
    display: "flex",
    justifyContent: "space-between",
    width: "360px",
    margin: '16px auto'
  },
  imagStyle: {
    height: 100,
    width: 100
  },
  sendButtonStyle :  {
    display: 'flex !important',
    margin: 'auto !important',
    backgroundColor: '#1bbeff !important'

  },

  mainContainer : {
     overflowX : 'auto'
  },

  successText : {
    paddingTop: 10
  }
   
}));
function Form(props) {
  const classes = useStyles();
  const {
    initiatePosting,
    store: { isLoading },
  } = props;
  const [state, setState] = useState({
    title: "",
    content: "",
    imgUrl: "",
  });
  const [image, setImage] = useState({ preview: "", raw: "" });
  const { title, content, imgUrl } = state;

  function updateState(fieldKey, value) {
    setState((prevState) => {
      return { ...prevState, [fieldKey]: value };
    });
  }
  function initiateAddPost(e) {
    const payload = {
      title,
      content,
      imgUrl,
    };
    initiatePosting(payload);
    setState({
      title: "",
      content: "",
      imgUrl: "",
    });
  }

  const handleChange = (e) => {
    if(e.target.files.length !== 0){
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);
    updateState("imgUrl", image.preview)
  };

  const uploadButtonStyle = {
    height: '16px',
    marginTop: '14px',
    fontSize: '12px'
  };

  const avatarStyle = { backgroundColor: "#1bbeff", marginTop: "30px" };
  
  return (
    <div className={classes.mainContainer}>
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <AddCircleOutlineOutlinedIcon />
        </Avatar>
        <h2 className={classes.headerStyle}>ADD POST</h2>
        <Typography variant="caption" gutterBottom>
          Please add your new post here !
        </Typography>
      </Grid>
      <div className="input-group">
        <input
          type="text"
          name=""
          id="text1"
          placeholder=" "
          onChange={(e) => updateState("title", e.target.value)}
        />
        <label htmlFor="text1">Title</label>
      </div>
      <div className="input-group">
        <input
          type="text"
          name=""
          id="text2"
          placeholder=" "
          onChange={(e) => updateState("content", e.target.value)}
        />
        <label htmlFor="text2">Message</label>
      </div>
      <div>
        <div className={classes.buttonStyle}>
          <label htmlFor="upload-button">
            {image.preview ? (
              <div className={classes.successText}>Added Successfully, Click to Upload Button</div>
            ) : (
              <>
                <ListItemButton className={classes.uploadStyle}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Upload your photo" />
                </ListItemButton>
              </>
            )}
          </label>
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <Button variant="outlined" onClick={handleUpload} style={uploadButtonStyle}>
            Upload
          </Button>
        </div>
      </div>
      <LoadingButton
        onClick={() => initiateAddPost()}
        endIcon={<SendIcon />}
        loading={isLoading}
        loadingPosition="end"
        variant="contained"
        className={classes.sendButtonStyle}
      >
        Send
      </LoadingButton>
    </div>
  );
}

const mapStateToProps = ({ reducer }) => ({
  store: reducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    initiatePosting: (payload) => dispatch(addNewFeed(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
