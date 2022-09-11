import React from "react";
import { Box, Grow, Paper } from "@mui/material";
import ActionOption from "./ActionOption";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CropFreeIcon from "@mui/icons-material/CropFree";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ClosedCaptionOffIcon from "@mui/icons-material/ClosedCaptionOff";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import SettingsIcon from "@mui/icons-material/Settings";

function InformationDialog({ isActive, changeWindowText }) {
  const mainActions = [
    {
      text: "Дошка для конференцій",
      subText: "Відкритий файл Jam",
      icon: <DriveFileRenameOutlineIcon />,
    },
    {
      text: "Записувати зустріч",
      subText: "",
      icon: <RadioButtonCheckedOutlinedIcon />,
    },
  ];

  const advancedActions = [
    {
      text: "Змінити макет",
      subText: "",
      icon: <AppRegistrationIcon />,
    },
    {
      text: "Повноекранний режим",
      subText: "",
      icon: <CropFreeIcon />,
    },
    {
      text: "Застосувати візуальні ефекти",
      subText: "",
      icon: <AutoFixHighIcon />,
    },
    {
      text: "Увімкнути субтитри",
      subText: "",
      icon: <ClosedCaptionOffIcon />,
    },
    {
      text: "Використовувати телефон для передачі звуку",
      subText: "",
      icon: <PhoneForwardedIcon />,
    },
  ];

  const supportActions = [
    {
      text: "Повідомити про проблему",
      subText: "",
      icon: <FeedbackIcon />,
    },
    {
      text: "Повідомити про порушення",
      subText: "",
      icon: <ReportGmailerrorredIcon />,
    },
    {
      text: "Вирішення проблем і довідка",
      subText: "",
      icon: <SearchOffIcon />,
    },
    {
      text: "Налаштування",
      subText: "",
      icon: <SettingsIcon />,
    },
  ];

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Grow in={isActive}>
          <Paper
            sx={{
              m: 1,
              position: "absolute",
              top: "-475px",
              left: "-10px",
              width: "400px",
              height: "450px",
            }}
            elevation={4}
          >
            {mainActions.map((a,key) => (
              <ActionOption action={a} key={key} changeWindowText={changeWindowText} />
            ))}
            <hr />
            {advancedActions.map((a,key) => (
              <ActionOption action={a} key={key} changeWindowText={changeWindowText} />
            ))}
            <hr />
            {supportActions.map((a,key) => (
              <ActionOption action={a} key={key} changeWindowText={changeWindowText} />
            ))}
          </Paper>
        </Grow>
      </Box>
    </div>
  );
}

export default InformationDialog;
