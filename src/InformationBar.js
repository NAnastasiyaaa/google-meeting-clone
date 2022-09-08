import React from "react";
import Button from "@mui/material/Button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

function InformationBar() {
  const microIcon = {
    color: "white",
  };
  const informationButtons = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div style={informationButtons}>
      <Button>
        <InfoOutlinedIcon style={microIcon}></InfoOutlinedIcon>
      </Button>
      <Button>
        <PeopleAltOutlinedIcon style={microIcon}></PeopleAltOutlinedIcon>
      </Button>
      <Button>
        <ChatOutlinedIcon style={microIcon}></ChatOutlinedIcon>
      </Button>
      <Button>
        <CategoryOutlinedIcon style={microIcon}></CategoryOutlinedIcon>
      </Button>
    </div>
  );
}

export default InformationBar;
