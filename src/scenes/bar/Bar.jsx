import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
const Bar = () => {
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
