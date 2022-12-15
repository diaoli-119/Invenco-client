import React from "react";
import * as CSS from "csstype";
import { Colors } from "../../constants/Colors";

export const Home: React.FC = () => {
  return (
    <div style={homeBackground}>
      <h1>Happy Christmas</h1>
    </div>
  );
};

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}
const homeBackground: Style = {
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundColor: Colors.lightGreen3,
  display: "flex",
  justifyContent: "space-around",
};
