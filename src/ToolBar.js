import React from "react";
import ActivityBar from "./ActivityBar";
import InformationBar from "./InformationBar";

function ToolBar() {
  const toolBarBox = {
    backgroundColor: "#313131",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };
  const meetingText = {
    paddingLeft: "20px",
  };
  return (
    <div style={toolBarBox}>
      <p style={meetingText}>Team meeting</p>
      <ActivityBar />
      <InformationBar />
    </div>
  );
}

export default ToolBar;
