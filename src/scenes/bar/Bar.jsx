import { Box, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import BarChart from "../../components/BarChart";
import { mockBarData as data } from "../../graphData/mockData";
const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title="BAR CHART" subtitle="simple bar chart"/>
      <Box mt={"40px 0 0 0"} height={"75vh"}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
