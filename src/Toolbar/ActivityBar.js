import React from "react";
import { useState } from "react";
import MicIcon from "@mui/icons-material/Mic";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import PresentToAllOutlinedIcon from "@mui/icons-material/PresentToAllOutlined";
import ClosedCaptionOffOutlinedIcon from "@mui/icons-material/ClosedCaptionOffOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CallEndIcon from "@mui/icons-material/CallEnd";
import { IconButton } from "@mui/material";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";

function ActivityBar() {
  const activityButton = {
    backgroundColor: "rgb(95,99,104)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    opacity: 0.9,
    borderRadius: "50%",
    color: "white",
    margin: "8px",
  };
  const callEndIcon = {
    backgroundColor: "red",
    color: "white",
    borderRadius: "50px",
    padding: "8px 16px",
  };
  const activityButtons = {
    display: "flex",
    justifyContent: "center",
  };

  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  return (
    <div style={activityButtons}>
      <IconButton onClick={() => setIsMuted(!isMuted)} style={activityButton}>
        {isMuted ? <MicOffIcon /> : <MicIcon />}
      </IconButton>
      <IconButton
        onClick={() => setIsVideoOn(!isVideoOn)}
        style={activityButton}
      >
        {isVideoOn ? <VideocamOutlinedIcon /> : <VideocamOffIcon />}
      </IconButton>
      <IconButton style={activityButton}>
        <PanToolOutlinedIcon />
      </IconButton>
      <IconButton style={activityButton}>
        <ClosedCaptionOffOutlinedIcon />
      </IconButton>
      <IconButton style={activityButton}>
        <PresentToAllOutlinedIcon />
      </IconButton>
      <IconButton style={activityButton}>
        <MoreVertOutlinedIcon />
      </IconButton>
      <IconButton>
        <CallEndIcon style={callEndIcon}></CallEndIcon>
      </IconButton>
    </div>
  );
}

export default ActivityBar;
