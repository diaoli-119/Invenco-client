import React from "react";

type Props = {
  btnName: string;
  btnStyle?: React.CSSProperties;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ btnName, btnStyle, onClick }) => {
  return (
    <div style={btnStyle} onClick={onClick}>
      {btnName}
    </div>
  );
};
