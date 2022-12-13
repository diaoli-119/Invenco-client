import React from "react";

type Props = {
  boxName?: string;
  boxContainer?: React.CSSProperties;
  boxStyle?: React.CSSProperties;
  type?: string;
  getInputText: (value: EventTarget & HTMLInputElement) => void;
};

export const InputBox: React.FC<Props> = ({
  boxName,
  boxContainer,
  boxStyle,
  type = "text",
  getInputText,
}) => {
  return (
    <div style={boxContainer}>
      <label>{boxName}</label>
      <input
        id={boxName}
        style={boxStyle}
        type={type}
        onChange={(e) => getInputText(e.target)}
      ></input>
    </div>
  );
};
