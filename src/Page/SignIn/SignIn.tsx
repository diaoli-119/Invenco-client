import React, { useState } from "react";
import * as CSS from "csstype";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../constants/Colors";
import logo from "../../images/Logo/sunwukong.jpeg";
import { Button } from "../../components/Button/Button";
import { InputBox } from "../../components/InputBox/InputBox";

const MOCKEMAIL = "test@gmail.com";
const MOCKPASSWORD = "11223344";

export const SignIn: React.FC = () => {
  const nagigate = useNavigate();

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const onClick = () => {
    if (email === MOCKEMAIL && password === MOCKPASSWORD) {
      nagigate("/home");
    } else {
      alert("Email or Password is invalid!");
    }
  };

  const getInputText = (target: EventTarget & HTMLInputElement) => {
    target.id === "Email*" ? SetEmail(target.value) : SetPassword(target.value);
  };

  return (
    <div style={signBackground}>
      <div style={signInContainer}>
        <div style={innerContainer}>
          <h3>Sign in</h3>
          <img src={logo} alt="Logo" />
          <InputBox
            boxName="Email*"
            boxContainer={boxContainer}
            boxStyle={inputBox}
            getInputText={getInputText}
          />
          <InputBox
            boxName="Password*"
            boxContainer={boxContainer}
            boxStyle={inputBox}
            type={"password"}
            getInputText={getInputText}
          />
        </div>
        <div style={btnContainer}>
          <Button btnName="Sign In" btnStyle={btnStyle} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
interface Style extends CSS.Properties, CSS.PropertiesHyphen {}
const signBackground: Style = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: Colors.blackBlue,
};
const signInContainer: Style = {
  position: "absolute",
  top: "10%",
  right: "38%",
  bottom: "10%",
  left: "38%",
  textAlign: "left",
  color: Colors.white,
  backgroundColor: Colors.kisEduBlue,
};

const innerContainer: Style = {
  position: "absolute",
  top: "5%",
  right: "12%",
  bottom: "10%",
  left: "10%",
};

const inputBox: Style = {
  width: "100%",
  height: "40px",
  borderRadius: "4px",
  backgroundColor: Colors.white,
};

const boxContainer: Style = {
  marginTop: "5%",
};

const btnContainer: Style = {
  display: "flex",
  justifyContent: "space-around",
};

const btnStyle: Style = {
  position: "absolute",
  bottom: "10px",
  width: "80%",
  height: "40px",
  backgroundColor: Colors.btnRed,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  borderRadius: "4px",
};
