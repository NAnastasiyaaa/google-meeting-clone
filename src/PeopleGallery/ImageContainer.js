import React from "react";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import MicOffIcon from "@mui/icons-material/MicOff";

function ImageContainer({ user }) {
  const imageCard = {
    width: "350px",
    height: "215px",
    borderRadius: "10px",
    objectFit:'cover'
  };
  const text = {
    position: "absolute",
    marginTop: "-40px",
    marginLeft: "20px",
    color: "white",
  };
  const activeUser = {
    border: "3px solid #1E90FF",
    borderRadius: "10px",
    width: "349px",
    height: "213px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };
  const soundIcon = {
    position: "absolute",
    marginLeft: "320px",
    marginTop: "10px",
    color: "white",
    backgroundColor: "#1E90FF",
    borderRadius: "50px",
  };
  const microClosedIcon = {
    position: "absolute",
    marginLeft: "320px",
    marginTop: "10px",
    color: "white",
    backgroundColor: "rgb(95,99,104)",
    borderRadius: "50px",
  };
  return (
    <div style={user.isActive ? activeUser : {}}>
      {user.isMuted && !user.isActive && <MicOffIcon style={microClosedIcon} />}
      {!user.isMuted && user.isActive && <GraphicEqIcon style={soundIcon} />}
      {user.url ? (
        <img src={user.url} style={imageCard} alt={user.title}></img>
      ) : (
        <div></div>
      )}
      <p style={text}>{user.title}</p>
    </div>
  );
}

export default ImageContainer;
