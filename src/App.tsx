import React, { useState } from "react";
import * as CSS from "csstype";
import "./App.css";
import { Colors } from "./constants/Colors";
import { SignIn } from "./Page/SignIn/SignIn";

const App = () => {
  return <div style={signBackground}></div>;
};

export default App;

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}
const signBackground: Style = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: Colors.blackBlue,
};
