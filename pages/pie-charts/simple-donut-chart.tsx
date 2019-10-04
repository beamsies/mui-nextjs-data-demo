import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ResponsivePie } from "@nivo/pie";
import { makeStyles, createStyles, Theme, useTheme } from "@material-ui/core/styles";

import ChartWidget from "../../src/components/ChartWidget";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    container: {
      [theme.breakpoints.down("md")]: {
        width: "calc(100vw - 42px)",
        height: 420
      },
      [theme.breakpoints.up("md")]: {
        width: "calc(100vw - 260px - 64px)",
        height: 640
      },
      [theme.breakpoints.up("lg")]: {}
    }
  })
);

const data = [
  {
    id: "java",
    label: "java",
    value: 161,
    color: "hsl(210, 70%, 50%)"
  },
  {
    id: "ruby",
    label: "ruby",
    value: 569,
    color: "hsl(255, 70%, 50%)"
  },
  {
    id: "javascript",
    label: "javascript",
    value: 423,
    color: "hsl(22, 70%, 50%)"
  },
  {
    id: "stylus",
    label: "stylus",
    value: 188,
    color: "hsl(178, 70%, 50%)"
  },
  {
    id: "erlang",
    label: "erlang",
    value: 181,
    color: "hsl(351, 70%, 50%)"
  }
];

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Pie Charts
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom>
          Simple Donut Chart
        </Typography>
        <ChartWidget classNames={classes.container}>
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: "nivo" }}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor={theme.palette.text.primary}
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: "color" }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ]}
            fill={[
              {
                match: {
                  id: "ruby"
                },
                id: "dots"
              },
              {
                match: {
                  id: "c"
                },
                id: "dots"
              },
              {
                match: {
                  id: "go"
                },
                id: "dots"
              },
              {
                match: {
                  id: "python"
                },
                id: "dots"
              },
              {
                match: {
                  id: "scala"
                },
                id: "lines"
              },
              {
                match: {
                  id: "lisp"
                },
                id: "lines"
              },
              {
                match: {
                  id: "elixir"
                },
                id: "lines"
              },
              {
                match: {
                  id: "javascript"
                },
                id: "lines"
              }
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 50,
                itemHeight: 18,
                itemTextColor: theme.palette.text.primary,
                itemDirection: "top-to-bottom",
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.text.secondary
                    }
                  }
                ]
              }
            ]}
          />
        </ChartWidget>
      </Box>
    </>
  );
}
