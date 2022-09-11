import React from "react";
import ActivityBar from "../Toolbar/ActivityBar";
import InformationBar from "../Toolbar/InformationBar";

function ToolBar() {
  const toolBarBox = {
    backgroundColor: "#313131",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  };
  const meetingText = {
    paddingLeft: "50px",
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
