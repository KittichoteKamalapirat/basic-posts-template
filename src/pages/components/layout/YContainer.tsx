import React from "react";

interface YContainerProps {}

export const YContainer: React.FC<YContainerProps> = ({ children }) => {
  return <div style={{ margin: "40px 0" }}>{children}</div>;
};
