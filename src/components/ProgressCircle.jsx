import { Box, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = ".75", size = "70" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
        conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
        ${colors.greenAccent[500]}`,        borderRadius: "50%",
        width: `${size}px`,
        height:`${size}px`,
        boxShadow:` ${colors.blueAccent[800]} 0px 6px 12px -2px, ${colors.grey[800]} 0px 3px 7px -3px`
      }}
    ></Box>
  );
};

export default ProgressCircle;
