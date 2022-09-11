import React from "react";

function ActionOption({ action, changeWindowText }) {
  const boardText = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    height: "40px",
    paddingLeft: "15px",
  };
  const actionText = {
    fontSize: "14px",
    fontWeight: 600,
  };
  const actionSubText = {
    fontSize: "12px",
    fontWeight: 300,
    paddingRight: "55px",
  };
  const actionInfo = {
    alignSelf: "center",
  };
  const actionIcon = {
    alignSelf: "center",
    marginTop: "3px",
  };

  return (
    <div onClick={() => changeWindowText(action.text)} style={boardText}>
      <div style={actionIcon}>{action.icon}</div>
      <div style={actionInfo}>
        <h5 style={actionText}>{action.text}</h5>
        {action.subText && <p style={actionSubText}>{action.subText}</p>}
      </div>
    </div>
  );
}

export default ActionOption;
