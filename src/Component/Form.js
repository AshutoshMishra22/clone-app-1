import React, { useState } from "react";
import { connect } from "react-redux";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import Input from "@mui/material/Input";
import LoadingButton from "@mui/lab/LoadingButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Flex } from "./Style";
import { addNewFeed } from "../redux/actionCreators";
import { FormGroup, FormControl, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import bg from "./bg.jpg";
export const useStyles = makeStyles((theme) => ({
  uploadBtn: {
    // display: "none",
  },
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
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
      imgUrl: bg,
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
