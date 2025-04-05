import React from "react";

function ParentComponent({ children }) {
  return <div className="flex flex-col items-center gap-5 ">{children}</div>;
}

export default ParentComponent;
