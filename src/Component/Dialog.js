import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormGroup, FormControl, InputLabel, Input } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  uploadBtn: {
    // display: "none",
  },
  container: {
    width: 300,
    "& > *": {
      marginTop: "30px !important",
    },
  },
}));
export default function FormDialog(props) {
  const classes = useStyles();
  const { open, compData, handleConfirm, handleClose } = props;
  const [state, setState] = useState({ title: "", content: "" });
  function updateState(fieldKey, value) {
    setState((prevState) => {
      return { ...prevState, [fieldKey]: value };
    });
  }
  useEffect(() => {
    if (compData) {
      setState(compData);
    }
  }, [compData]);
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update</DialogTitle>
        <DialogContent>
          <DialogContentText>Feed</DialogContentText>
          <FormGroup className={classes.container}>
            <FormControl>
              <InputLabel>Title</InputLabel>
              <Input
                value={state.title}
                onChange={(e) => updateState("title", e.target.value)}
                autoFocus
              />
            </FormControl>
            <FormControl>
              <InputLabel>Content</InputLabel>
              <Input
                value={state.content}
                onChange={(e) => updateState("content", e.target.value)}
              />
            </FormControl>
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleConfirm(state)}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
