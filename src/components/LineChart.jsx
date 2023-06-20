import { ResponsivePie } from "@nivo/pie";
import { mockLineData as data } from "../graphData/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            background: colors.grey[900],
            borderRadius: "2.5px",
            boxShadow: `0 3px 4px ${colors.shadow[100]}`,
            padding: 8,
          },
        },
      }}
      // colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="natural"
      axisTop={{
        orient: "top",
        tickSize: 9,
        tickPadding: 9,
        tickRotation: 0,
        legend: "",
        legendOffset: 36,
      }}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickValues:10,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "purpleRed_green" }}
      lineWidth={3}
      pointSize={7}
      pointColor={{ theme: "background" }}
      pointBorderWidth={3}
      pointBorderColor={colors.grey[100]}
      pointLabelYOffset={-8}
      enableArea={true}
      areaOpacity={0.4}
      crosshairType="cross"
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "square",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: colors.blueAccent[400],
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      motionConfig="normal"
    />
  );
};
export default LineChart;
