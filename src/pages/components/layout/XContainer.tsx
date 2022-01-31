import React from "react";

interface XContainerProps {}

export const XContainer: React.FC<XContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <div style={{ maxWidth: "600px", width: "90%", margin: "0 auto" }}>
      <div {...props}>{children}</div>
    </div>
  );
};
