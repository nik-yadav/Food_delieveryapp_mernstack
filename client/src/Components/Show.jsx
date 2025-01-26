import React from "react";

const Show = ({ children, if: condition }) => {
  if (condition) {
    return <>{children}</>;
  }
  return null;
};

export default Show;
