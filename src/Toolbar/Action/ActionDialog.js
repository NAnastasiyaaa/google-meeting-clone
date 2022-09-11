import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Paper, Slide } from "@mui/material";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

function ActionDialog({ actionText, changeActionText }) {
  const actionTextWindow = {
    textAlign: "center",
    paddingTop: "300px",
  };
  const closeBtn = {
    float: "right",
  };
  return (
    <Slide
      direction="left"
      in={actionText}
      style={{ position: "absolute", right: -8, top: -10, bottom: 50 }}
      mountOnEnter
      unmountOnExit
    >
      <Paper
        sx={{
          m: 1,
          position: "relative",
          width: "500px",
          height: "675px",
          marginTop: "20px",
          marginRight: "20px",
        }}
        elevation={4}
      >
        <Tooltip title="Вихід">
          <IconButton style={closeBtn} onClick={() => changeActionText(null)}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
        <h2 style={actionTextWindow}>{actionText}</h2>
      </Paper>
    </Slide>
  );
}

export default ActionDialog;
