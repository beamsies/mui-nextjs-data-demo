import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from "recharts";
import { useTheme } from "@material-ui/styles";

import ChartWidget from "../../src/components/ChartWidget";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: -3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: -2000,
    pv: -9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: -1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: -3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function App() {
  const theme: any = useTheme();
  return (
    <>
      <Box my={4}>
        <Typography variant="h6" component="h1" gutterBottom>
          Positive &amp; Negative Bar Chart
        </Typography>
        <ChartWidget>
          <ResponsiveContainer minWidth={500} minHeight={320}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip labelStyle={{ color: theme.palette.grey.A700 }} />
              <Legend />
              <ReferenceLine y={0} stroke={theme.palette.text.primary} />
              <Bar dataKey="pv" fill={theme.palette.secondary.main} />
              <Bar dataKey="uv" fill={theme.palette.primary.main} />
            </BarChart>
          </ResponsiveContainer>
        </ChartWidget>
      </Box>
    </>
  );
}
