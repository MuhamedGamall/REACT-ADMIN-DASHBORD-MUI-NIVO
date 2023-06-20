import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title="GEOGRAPHY CHART" subtitle="simple geography chart" />
      <Box mt={"40px 0 0 0"} height={"75vh"} border={`.5px solid ${colors.grey[100]}` }borderRadius={'3px'} p={'10px'}>
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
