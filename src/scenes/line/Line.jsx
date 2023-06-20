import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
const Line = () => {
  return (
    <Box>
      <Header title="Line CHART" subtitle="simple line chart"/>
      <Box mt={"40px 0 0 0"} height={"75vh"}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
