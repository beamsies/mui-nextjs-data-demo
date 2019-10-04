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
    id: "haskell",
    label: "haskell",
    value: 137,
    color: "hsl(340, 70%, 50%)"
  },
  {
    id: "sass",
    label: "sass",
    value: 133,
    color: "hsl(200, 70%, 50%)"
  },
  {
    id: "javascript",
    label: "javascript",
    value: 206,
    color: "hsl(333, 70%, 50%)"
  },
  {
    id: "make",
    label: "make",
    value: 407,
    color: "hsl(40, 70%, 50%)"
  },
  {
    id: "erlang",
    label: "erlang",
    value: 85,
    color: "hsl(40, 70%, 50%)"
  }
];

export default function App() {
  const classes = useStyles();
  const theme: any = useTheme();
  return (
    <>
      <Box my={4} className={classes.container}>
        <Typography variant="h4" component="h1" gutterBottom>
          Pie Charts
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom>
          Simple Pie Chart
        </Typography>
        <ChartWidget classNames={classes.container}>
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            cornerRadius={3}
            colors={{ scheme: "paired" }}
            borderWidth={1}
            borderColor={{ theme: "background" }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor={theme.palette.text.primary}
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: "color" }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor={theme.palette.text.primary}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            defs={
              [
                // {
                //   id: "dots",
                //   type: "patternDots",
                //   background: "inherit",
                //   color: "rgba(255, 255, 255, 0.3)",
                //   size: 4,
                //   padding: 1,
                //   stagger: true
                // },
                // {
                //   id: "lines",
                //   type: "patternLines",
                //   background: "inherit",
                //   color: "rgba(255, 255, 255, 0.3)",
                //   rotation: -45,
                //   lineWidth: 6,
                //   spacing: 10
                // }
              ]
            }
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
