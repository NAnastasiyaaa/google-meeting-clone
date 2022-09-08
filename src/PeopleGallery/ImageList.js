import React from "react";
import data from "./data/users.json";
import ImageContainer from "./ImageContainer";

function ImageList() {
  const container = {
    width: "80%",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "10px",
    marginLeft: "50px",
    marginTop: "10px",
    marginBottom: "4px",
  };

  return (
    <div style={container}>
      {data.users.map((user) => (
        <ImageContainer key={user.id} user={user} />
      ))}
    </div>
  );
}

export default ImageList;
