import React, { useState } from "react";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import MicOffIcon from "@mui/icons-material/MicOff";

function ImageContainer({ user }) {
  const initImg = user.url;
  const [currentImage, setCurrentImage] = useState(initImg);
  const imageCard = {
    width: "350px",
    height: "215px",
    borderRadius: "10px",
    objectFit: "cover",
  };
  const text = {
    position: "absolute",
    marginTop: "-40px",
    marginLeft: "20px",
    color: "white",
  };
  const active = {
    position: "relative",
  };
  const activeUser = {
    position: "absolute",
    boxSizing: "border-box",

    border: "3px solid  #669df6",
    borderRadius: "10px",
    width: "350px",
    height: "215px",
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

  const getRandomImage = async () => {
    if (currentImage === initImg) {
      const request = await fetch("https://meeting-clone-nastya.herokuapp.com/api/randomimage");
      const json = await request.json();
      setCurrentImage(`https://meeting-clone-nastya.herokuapp.com/cats/${json.image}`);
    } else {
      setCurrentImage(initImg);
    }
  };

  return (
    <div style={user.isActive ? active : {}} onClick={getRandomImage}>
      <div style={user.isActive ? activeUser : {}}></div>
      {user.isMuted && !user.isActive && <MicOffIcon style={microClosedIcon} />}
      {!user.isMuted && user.isActive && <GraphicEqIcon style={soundIcon} />}
      {user.url && (
        <img src={currentImage} style={imageCard} alt={user.title} />
      )}
      <p style={text}>{user.title}</p>
    </div>
  );
}

export default ImageContainer;
