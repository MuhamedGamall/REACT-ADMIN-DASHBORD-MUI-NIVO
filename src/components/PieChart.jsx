import { ResponsivePie } from "@nivo/pie";
import { mockPieData as data } from "../graphData/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const PieChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsivePie
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
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      startAngle={-56}
      sortByValue={true}
      innerRadius={0.55}
      cornerRadius={14}
      activeInnerRadiusOffset={12}
      activeOuterRadiusOffset={21}
      colors={{ scheme: "purpleRed_green" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0.2"]],
      }}
      arcLinkLabel={(e) => e.id + " (" + e.value + ")"}
      arcLinkLabelsSkipAngle={14}
      arcLinkLabelsTextOffset={12}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsDiagonalLength={18}
      arcLinkLabelsStraightLength={23}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ theme: "labels.text.fill" }}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={18}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["brighter", "2"]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      transitionMode="middleAngle"
      legends={
        isDashboard
          ? [
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 7,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: colors.blueAccent[400],
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};
export default PieChart;
