import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <>
      <Box>
        <Header title="DASHBORD" subTitle={"Wilcome to your Dashboard"} />
        <Box
          m="40px 0 0 0"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
