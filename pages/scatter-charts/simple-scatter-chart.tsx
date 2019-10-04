import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { useTheme } from "@material-ui/styles";

import ChartWidget from "../../src/components/ChartWidget";

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 }
];

export default function Page() {
  const theme: any = useTheme();
  return (
    <>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Scatter Charts
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom>
          Simple Scatter Chart
        </Typography>
        <ChartWidget>
          <ResponsiveContainer minWidth={500} minHeight={320}>
            <ScatterChart
              width={400}
              height={400}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
              }}
            >
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="stature" unit="cm" />
              <YAxis type="number" dataKey="y" name="weight" unit="kg" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter
                name="A school"
                data={data}
                fill={theme.palette.secondary.dark}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </ChartWidget>
      </Box>
    </>
  );
}
