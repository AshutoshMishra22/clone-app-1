import React, { useState } from "react";
import { connect } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import SendIcon from "@mui/icons-material/Send";
import Input from "@mui/material/Input";
import LoadingButton from "@mui/lab/LoadingButton";
import { addNewFeed } from "../redux/actionCreators";
import { FormGroup, FormControl, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h5">Add New Post ...</Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input
          value={title}
          onChange={(e) => updateState("title", e.target.value)}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Content</InputLabel>
        <Input
          value={content}
          onChange={(e) => updateState("content", e.target.value)}
        />
      </FormControl>
      <LoadingButton
        onClick={() => initiateAddPost()}
        endIcon={<SendIcon />}
        loading={isLoading}
        loadingPosition="end"
        variant="contained"
      >
        Send
      </LoadingButton>
      {/* <label htmlFor="icon-button-file">
        <Input
          className={classes.uploadBtn}
          accept="image/*"
          id="icon-button-file"
          type="file"
          onClick={(e) => {
            console.log("from input ", e);
            updateState("imgUrl", e.target);
          }}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <FileUploadIcon />
        </IconButton>
      </label>
     */}
    </FormGroup>
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
