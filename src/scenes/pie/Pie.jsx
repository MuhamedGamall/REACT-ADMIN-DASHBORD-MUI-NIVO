import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
const Pie = () => {
  return (
    <Box>
      <Header title="Pie CHART" subTitle="simple pie chart"/>
      <Box mt={"40px 0 0 0"} height={"75vh"}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
