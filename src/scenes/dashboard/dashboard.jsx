import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import {
  DownloadOutlined,
  EmailOutlined,
  PersonAdd,
  PointOfSaleOutlined,
  TrafficOutlined,
} from "@mui/icons-material";
import { mockTransactions } from "../../graphData/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(max-width:991px)");
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        sx={{
          "& > .MuiBox-root": {
            boxShadow: `${colors.primary[900]} 0px 1px 4px`,
            borderRadius: "4px",
          },
        }}
        display={isNonMobile ? "flex" : "grid"}
        gridTemplateColumns={isNonMobile ? undefined : "repeat(12, 1fr)"}
        gridAutoRows={isNonMobile ? undefined : "230px"}
        flexDirection={isNonMobile ? "column" : undefined}
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subTitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subTitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subTitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAdd
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subTitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* Row 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt={"25px"}
            p={"0 30px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={"bold"}
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight={"400"}
                color={colors.greenAccent[500]}
              >
                $59,342,32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{ fontSize: "20px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height={"400px"} mt={"-20px"}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Transactions */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow={"auto"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignContent={"center"}
            borderBottom={`3px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p={"15px"}
          >
            <Typography
              color={colors.grey[400]}
              variant="h5"
              fontWeight={"600"}
            >
              Recent Tansactions
            </Typography>
          </Box>
          {mockTransactions.map((el, i) => (
            <Box
              key={`${el.txId}-${i}`}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={`1px solid ${colors.primary[500]}`}
              p={"15px"}
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight={"600"}
                >
                  {el.user}
                </Typography>
                <Typography color={colors.grey[100]}>{el.txId}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{el.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p={"5px 10px"}
                borderRadius={"4px"}
              >
                ${el.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Row 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p={"30px"}
        >
          <Typography variant="h5" fontWeight={600}>
            Campaign
          </Typography>
          <Box height={"250px"} mt={"20px"}>
            <PieChart isDashboard={true} />
          </Box>
          <Typography
            variant="h5"
            fontWeight={600}
            color={colors.greenAccent[500]}
            textAlign={"center"}
            sx={{
              mt: "15px",
            }}
          >
            $48,352 Revenerated
          </Typography>
          <Typography textAlign={"center"}>
            Includes extra misc expenditures and costs
          </Typography>
        </Box>
        {/* Row 4 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight={600}
            padding={"30px 30px 0 30px"}
          >
            Sales Quantity
          </Typography>
          <Box height={"250px"} mt={"20px"}>
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        {/* Row 5 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p={"30px"}
        >
          <Typography variant="h5" fontWeight={600} mb={"15px"}>
            Geography Based Traffic
          </Typography>
          <Box height={"250px"} mt={"20px"}>
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
