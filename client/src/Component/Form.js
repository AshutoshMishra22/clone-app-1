import React, { useState } from "react";
import { connect } from "react-redux";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Flex } from "./Style";
import { registerUser } from "../redux/actionCreators";

function Form(props) {
  const { initiateRegister } = props;
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });
  const {
    userName,
    email,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
  } = state;

  function updateState(fieldKey, value) {
    setState((prevState) => {
      return { ...prevState, [fieldKey]: value };
    });
  }
  function initiateAddDetails(e) {
    const payload = {
      userName,
      email,
      password,
    };
    initiateRegister(payload);
    setState({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
    });
  }
  return (
    <Flex direction="column" style={{ width: 300, height: 400 }}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="User Name"
          variant="standard"
          value={userName}
          onChange={(event) => updateState("userName", event.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          value={email}
          onChange={(event) => updateState("email", event.target.value)}
        />
        {/* Password */}
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(event) => updateState("password", event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => updateState("showPassword", !showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {/* Confirm Password */}
        <InputLabel htmlFor="standard-adornment-password">
          Confirm Password
        </InputLabel>
        <Input
          id="standard-adornment-password"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(event) =>
            updateState("confirmPassword", event.target.value)
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() =>
                  updateState("showConfirmPassword", !showPassword)
                }
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button variant="contained" onClick={initiateAddDetails}>
          Register
        </Button>
      </Box>
    </Flex>
  );
}

// const mapStateToProps = ({ reducer }) => ({
//   store: reducer,
// });

const mapDispatchToProps = (dispatch) => {
  return {
    initiateRegister: (payload) => dispatch(registerUser(payload)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
